import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class AddMyuser extends Component {

  
  state = {
      fname: '',
      lname:'',
      dob:'',
      email: '',
      password:'',
      somdac:'',
      
    }
onHandleChange=(e) =>
{
const {name,value}=e.target
this.setState({[name]:value })
}
 

onSubmit=(e)=> {
e.preventDefault()
console.log("knxdj")




  

  
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onHandleChange } required />
        </Form.Group>
        <Form.Group controlId="LName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onHandleChange} required/>
        </Form.Group>
       
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onHandleChange} required/>
        </Form.Group>
        
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onHandleChange} required/>
        </Form.Group>
        <Form.Group controlId="DOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" value={this.state.dob} onChange={this.onHandleChange} required/>
        </Form.Group>
       
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
         Add User
        </Button>
      </Form>
    </div>);
  }
}


