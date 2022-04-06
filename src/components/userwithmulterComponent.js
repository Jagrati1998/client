
import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class User extends Component {
  state = {
           
    fname:'',
    lname:'',
     dob:'',

     email: '',
     password:'',
     profileImg: '',
}
    

    onHandlechange=(e) =>
    {
      const {name,value}=e.target
        this.setState({[name]:value })
      }
      
      
    onFileChange=(e)=> 
    {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit=(e)=> {
        console.log("knxdj")
        // const userObject = {
        //     fname: this.state.fname,
        //     lname: this.state.lname,
        //     email: this.state.email,
        //     dob:this.state.dob,
        //     password:this.state.password,
        //     profileImg:this.state.profileImg
        //   };
        
        e.preventDefault()
        // const userObject = {
        //     fname: this.state.fname,
        //     profileImg:this.state.profileImg
        //   };
        const formData = new FormData()
       
        formData.append('fname', this.state.fname)
        formData.append('lname', this.state.lname)
        formData.append('dob', this.state.dob)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        formData.append('profileImg', this.state.profileImg)
        axios.post("http://localhost:4000/users/add-user", formData, {
        }).then(res => {
            console.log(res)
           // this.setState({ fname: '', profileImg: ''})
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}encType="multipart/form-data">
                    <Form.Group >
                    <Form.Label>First Name</Form.Label>
                     <Form.Control name ="fname"   type="text"  onChange={this.onHandlechange } />
                   </Form.Group>
                   <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                     <Form.Control   name ="lname"type="text"  onChange={this.onHandlechange } />
                   </Form.Group>
                   <Form.Group >
                    <Form.Label>Email</Form.Label>
                     <Form.Control   name ="email" type="email" onChange={this.onHandlechange } />
                   </Form.Group>
                   <Form.Group >
                    <Form.Label>Password</Form.Label>
                     <Form.Control  name ="password" type="password"  onChange={this.onHandlechange } />
                   </Form.Group>
                   <Form.Group>
                   <Form.Group controlId="DOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control  name ="dob" type="date"  onChange={this.onHandlechange} />
        </Form.Group>
                   <Form.Label>Upload Your Image</Form.Label>
                   <Form.Control  type="file" onChange={this.onFileChange} />
                   </Form.Group>
                   <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
         Add User
        </Button>
                    </form>
                </div>
            </div>
        )
    }
}