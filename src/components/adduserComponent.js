import React, { isValidElement } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import FileBase64 from 'react-file-base64';
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
imagem: Yup.mixed().required("image is Required")
//.imageDimensionCheck('test', 1988, 3056)
//.test('fileType', 'Unsupported File Format', function (value) {
 // const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  //return SUPPORTED_FORMATS.includes(value.type)

//.test('fileSize', "File Size is too large", value => 
 // const sizeInBytes = 500000;//0.5MB
  // value.size <= 500000),

  // .test('fileSize', "File is too large", value => value.size <= 1800006565000)
});


export default class Adduser extends React.Component {

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
         
            <Formik 
            
              initialValues={{ fname:"",lname:"",email: "", password: "" ,dob:"",imagem:""}}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
               // console.log(values);
                 axios.post('http://localhost:4000/users/add-user', values)
                
               .then(res => console.log(res.data));
                 alert("Form is validated! Submitting the form...");
               }}
            >
                {({ setFieldValue, touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <div>
                    
                    <Form>
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
                      <label htmlFor="imagem" className="mt-3">
                          Upload Your Image
                        </label>
                       <br/>
                
                        <Field
                      id="file"
                      name="imagem" 
                      type="file"
                      accept="image/jpeg" 
                    
                     // onDone={(file) => setFieldValue("imagem", file)} <FileBase64 
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
  

