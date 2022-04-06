import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { useDropzone } from "react-dropzone";

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
    .test('fileSize', "File is too large", value => value.size <= 5242880)
});

// const handleFileInput = (e) => {
//   // handle validations
//   const file = e.target.files[0];
  
//   if (file.size > 1024)
//   //onFileSelectError({ error: "File size cannot exceed more than 1MB" });
//   //else onFileSelectSuccess(file);
// };
export default class Adduser extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
         
            <Formik
            
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
               // console.log(values);
               axios.post('http://localhost:4000/users/add-user', values)
              .then(res => console.log(res.data));
                alert("Form is validated! Submitting the form...");
              }}
            >
              {({ touched, errors, isSubmitting, values ,setFieldValue}) =>
                !isSubmitting ? (
                  <div>
                    
                    <Form encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <Field
                          type="text"
                          name="fname"
                          placeholder="Enter first name"
                          autocomplete="off"
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
                          autocomplete="off"
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
                          autocomplete="off"
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
                  <label htmlFor="file">Upload your image</label>


                  

                  <UploadComponent setFieldValue={setFieldValue} />
                  {values.files &&
                    values.files.map((file, i) => (
                      <li key={i}>
                        {`File:${file.name} Type:${file.type} Size:${
                          file.size
                        } bytes`}{" "}
                      </li>
                    ))}
                
                     
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
  

const UploadComponent = props => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFieldValue("files", acceptedFiles);
    }
  });
  return (
    <div>
      {}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};