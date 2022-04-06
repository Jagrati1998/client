import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Userlist from './userlistComponent';

export default class UpdateUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserFName = this.onChangeUserFName.bind(this);
    this.onChangeUserLName = this.onChangeUserLName.bind(this);
    this.onChangeUserDob =   this.onChangeUserDob.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        fname: '',
        lname:'',
        dob:'',
        
        email: '',
        password:'',
       
        
      }
   
  
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/getuser' + this.props.match.params.id)
      .then(res => {
        this.setState({
            fname:res.data.fname,
            lname:res.data.lname,
            dob:res.data.dob,
            email:res.data.email,
            
            password:res.data.password,
            
         
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
       
      };
    axios.put('http://localhost:4000/users/update-user/' + this.props.match.params.id, userObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/Userlist')
  }


  render() {
    return (
      <div><h1>sdhsjfjd</h1>
        <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="FName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={this.state.fname} onChange={this.onChangeUserFName } />
          </Form.Group>
          <Form.Group controlId="LName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={this.state.lname} onChange={this.onChangeUserLName} />
          </Form.Group>
          <Form.Group controlId="DOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" value={this.state.dob} onChange={this.onChangeUserDob} />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
          </Form.Group>
          
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />
          </Form.Group>
          

        <Button variant="danger" size="lg" block="block" type="submit">
          Update User
        </Button>
      </Form>
    </div> </div>);
  }
}