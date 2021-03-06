import React from 'react';
import axios from 'axios';
import {useDropzone} from 'react-dropzone'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { calendarFormat } from 'moment';
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
    profileImg: Yup.mixed().required("image is Required")
});







class Updatemyuser extends React.Component {
  

  Uploadimage(props) {
   // alert("The function 'test' is executed");
    <Form>
    <input type="file"  ></input>
    </Form>
    // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    
    // const files = acceptedFiles.map(file => (
    //   <li key={file.path}>
    //     {file.path} - {file.size} bytes
    //   </li>
    // ));
  
    // return (
    //   <section className="container">
    //     <div {...getRootProps({className: 'dropzone'})}>
    //       <input {...getInputProps()} />
    //       <p>Drag 'n' drop some files here, or click to select files</p>
    //     </div>
    //     <aside>
    //       <h4>Files</h4>
    //       <ul>{files}</ul>
    //     </aside>
    //   </section>
    // );
  }
  // handleSubmit=(values,{resetForm}) => {
    
  //       alert(JSON.stringify(values, null, 2));
       
  //       const formData = new FormData();

  //                 formData.append('fname', values.fname);
  //                 formData.append('lname', values.lname);
  //                 formData.append('email', values.email);
  //                 formData.append('password', values.password);
  //                 formData.append('dob', values.dob);
  //                 formData.append('profileImg', values.profileImg);
  //                // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
  //                axios.put("http://localhost:4000/users/update-user/:id'",  formData, {headers: {
  //                 "Content-Type": "multipart/form-data",
  //               },})
  //                .then(console.log)
  //                //values.fname= ""; 
  //                resetForm({values:""})
  //                alert('SUCCESS!! ' );
                
       
  //   };
    componentDidMount(){
      const id=this.props.match.params.id;
       
       axios.get('http://localhost:4000/users/getuser/:' + id)
        .then(res => {
          this.setState({
              fname:res.data.fname,
              lname:res.data.lname,
              dob:res.data.dob,
              email:res.data.email,
              
              password:res.data.password,
              profileImg:res.data.profileImg
              
           
          });
        })
        .catch((error) => {
          console.log(error);
        })
      }
                  
  //   // axios.post("http://localhost:4000/users/update-user",  values)
  //   // .then(console.log)
  //   //  alert('SUCCESS!! ' )
    
   onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
       
          const formData = new FormData();
  
                    formData.append('fname', values.fname);
                    formData.append('lname', values.lname);
                    formData.append('email', values.email);
                    formData.append('password', values.password);
                    formData.append('dob', values.dob);
                    formData.append('profileImg', values.profileImg);
                   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
                   axios.put("http://localhost:4000/users/update-user/:id'",  formData, {headers: {
                    "Content-Type": "multipart/form-data",
                  },})
                   .then(console.log)
                   //values.fname= ""; 
                 
                   alert('SUCCESS!! ' );
   
     
                }
  

    render() {
    
        return (
         
          <div>
             <h1>djkdjk</h1>
            <Formik
                 initialValues={{ fname:"",lname:"",email: "", password: "" ,dob:"",profileImg:""}}
                validationSchema={LoginSchema}
  
                onSubmit={this.onSubmit}
              
               
                  // console.log(values);
                  
                // catch(console.error);
        
                   //  resetForm({});
                   
                 
                    
                 
              
              
                render={({ setFieldValue, errors, status, touched }) => (
                   
                  <Form >
                  <div className="form-group">
                      <label htmlFor="fname">First ooName</label>
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
                   
                    <label htmlFor="imagem" className="mt-3">
                        Upload Your Image
                      </label>
                     <br/>
                   
                    
                     <input
                id="file"
                name="profile"
                type="file"
                onChange={(event) => {
                  const File = event.target.files[0];
                  setFieldValue("profileImg", File);
                }}
              />
                  
                   
                        <div className="form-group">
                            <button type="submit" onClick="onSubmit()" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
              </div>
        )
      
    }
   
}

export default Updatemyuser;
