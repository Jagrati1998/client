import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AddMyuser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserFName = this.onChangeUserFName.bind(this);
    this.onChangeUserLName = this.onChangeUserLName.bind(this);
    this.onChangeUserDob =   this.onChangeUserDob.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
  
    
   
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      fname: '',
      lname:'',
      dob:'',
      
      email: '',
      password:'',
      somdac:'',
      
    }
  }

  onChangeUserFName(e) {
    this.setState({ fname: e.target.value })
  }
  onChangeUserLName(e) {
    this.setState({ lname: e.target.value })
  }
  onChangeUserDob(e) {
    this.setState({ dob: e.target.value })
  }
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })
  }
  onChangeUserSomdac(e) {
    this.setState({ somdac: e.target.value })
  }

  


  

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      dob:this.state.dob,
      password:this.state.password,
      somdac:this.state.somdac
    };
  
  
    axios.post('http://localhost:4000/users/add-user', userObject)
     .then(res => console.log(res.data));

      
    this.setState({ fname: '', lname:'',email: '', date:'',password:'',somdac:'' })
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onChangeUserFName } required />
        </Form.Group>
        <Form.Group controlId="LName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onChangeUserLName} required/>
        </Form.Group>
       
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} required/>
        </Form.Group>
        
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} required/>
        </Form.Group>
        <Form.Group controlId="DOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" value={this.state.dob} onChange={this.onChangeUserDob} required/>
        </Form.Group>
       
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
         Add User
        </Button>
      </Form>
    </div>);
  }
}