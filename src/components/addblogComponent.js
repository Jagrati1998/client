import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {cols,minRows,rows} from 'react-bootstrap';
import * as Yup from "yup";
//import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
const moment = require('moment');
const BlogSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "name must be 3 characters at minimum")
  .required(" name is required"),
  blog: Yup.string()
  .min(3, "blog must be 3 characters at minimum")
  .required("blog is required"),
 
});

class Addblog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={BlogSchema}
              onSubmit={(values) => {
               // console.log(values);
               axios.post('http://localhost:4000/blogs/add-blog', values)
              .then(res => console.log(res.data));
                alert("Form is validated! Submitting the form...");
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <div>
                    
                    <Form>
                    <div className="form-group">
                        <label htmlFor="name"> Name</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          autocomplete="off"
                          className={`mt-2 form-control
                          ${touched.name && errors.name ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="div"
                          name="name"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="blog">Description</label>
                        <Field as ="textarea"
                         
                          rows="5"
                          name="blog"
                          placeholder="Enter blog"
                          
                          autocomplete="off"
                          className={`mt-2 form-control
                          ${touched.blog && errors.blog ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="div"
                          name="blog"
                          className="invalid-feedback"
                        />
                      </div>
                      
  
                      
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>
  
                    <div className="alert alert-success mt-3">
                      Thank You for vist
                    </div>
                    
                  </div>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Addblog;





































/*import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import {cols,minRows} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AddMyblog extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserBlog= this.onChangeUserBlog.bind(this);
   
   
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      blog:'',
      
      
    }
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeUserBlog(e) {
    this.setState({ blog: e.target.value })
  }
  
  

  


  

  onSubmit(e) {
    e.preventDefault()

    const blogObject = {
      name: this.state.name,
      blog: this.state.blog,
      
    };
  
  
    axios.post('http://localhost:4000/blogs/blog', blogObject)
     .then(res => console.log(res.data));

      
    this.setState({ name: '', blog:'' }) 
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="UserName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} required/>
        </Form.Group>
        <Form.Group controlId="UserBlog" >
          <Form.Label>Description</Form.Label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
         value={this.state.blog} onChange={this.onChangeUserBlog}required />
        </Form.Group>
        
     

       
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
         
        </Button>
      </Form>
    </div>);
  }
}


*/