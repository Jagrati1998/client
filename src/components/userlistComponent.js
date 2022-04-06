import React, { Component } from 'react'
import Icon from '@mui/material/Icon';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
const moment = require('moment');

//moment().format('YYYY-MM-DD');

export default class Userlist extends Component {//userlist
  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
  }

  deleteUser() {
    axios
      .delete(
        'http://localhost:4000/users/delete-user/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('user successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
  render() {
    return (
      //<img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
      //${file.filePath}
       // <img src={require(`${profilepic}`)} /> <td ><img src={require("/home/jagrati/usernex/server/public/images/download.jpeg")} alt="missing"/>  </td>
      // <td> <img src={require(`${this.props.obj.imagepath}`)} /> </td>
    <tr>
    
    <td>{this.props.obj.imagepath}</td>
       
       <td>{this.props.obj.fname}</td>
      <td>{this.props.obj.lname}</td>
       <td>{moment(this.props.obj.dob).format('YYYY-MM-DD')}</td>
       <td>{this.props.obj.email}</td>
       
      
       <td>
       <Link 
         className="edit-link" path={"product/:id"}
         to={'/update-user/' + this.props.obj._id}
         >
            <BorderColorIcon/>
         </Link>
         <Button onClick={this.deleteUser} size="sm" variant="danger">
        <DeleteIcon/>
         </Button>  
        </td>
      </tr>
     
   )
 }
}
