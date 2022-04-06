import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Formik ,Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
const moment = require('moment');
const LoginSchema = Yup.object().shape({
    fname: Yup.string()
    .min(3, "fname must be 3 characters at minimum")
    .required("first name is required"),
    lname: Yup.string()
    .min(3, "lname must be 3 characters at minimum")
    .required("last name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
      dob:Yup.string()
      .required("DOB is Required")
     
      .test("DOB", "Please choose a valid date of birth", (value) => {
        return moment().diff(moment(value), "years") >= 1;
      }),
      file: Yup.mixed().required("image is Required")
  });



export default class Addfile extends React.Component {
   
    handleSubmit=(values) => {
        alert(
          JSON.stringify(
            { fname:values.fname,
              lname:values.lname,
              email: values.email,
              password: values.password,
              dob:values.dob,
              fileName: values.file.name, 
            //  type: values.file.type,
              //size: `${values.file.size} bytes`
            },
            null,
            2
          )
        );
        axios.post('http://localhost:4000/users/add-user', values)
                
               .then(res => console.log(res.data));
      } 
  render() {
    return (
      <div className="container">
        <Formik 
         initialValues={{ fname:"",lname:"",email: "", password: "" ,dob:"", file: "" }}
         
          validationSchema={LoginSchema}
          onSubmit={this.handleSubmit}
         
          render={({ values, errors, status, touched , handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="fname">First Name</label>
                      <Field
                        type="text"
                        name="fname"
                        placeholder="Enter first name"
                        autoComplete="off"
                        className={`mt-2 form-control
                        ${touched.fname && errors.fname ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="fname"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname">Last Name</label>
                      <Field
                        type="text"
                        name="lname"
                        placeholder="Enter last name"
                        autoComplete="off"
                        className={`mt-2 form-control
                        ${touched.lname && errors.lname ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="lname"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className={`mt-2 form-control
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
                        ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dob" className="mt-3">
                        Date Of Birth
                      </label>
                      <Field
                        type="date"
                        name="dob"
                        placeholder="Enter Date Of Birth"
                        className={`mt-2 form-control
                        ${
                          touched.dob && errors.dob
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="dob"
                        className="invalid-feedback"
                      />
                    </div>
                <div className="form-group">
                  <label for="file">File upload</label>
                  <input id="file" name="file" type="file" onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }} className="form-control" />
               
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
              </form>
            );
          }} />
      </div>
    );
  }
};