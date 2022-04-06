import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';

import red from '@material-ui/core/colors/red';

const accent = red[800]; 

export default class Bloglist extends Component {//userlist
    constructor(props) {
      super(props)
    
      this.deleteBlog = this.deleteBlog.bind(this)
    }
  
    deleteBlog() {
      axios
        .delete(
          'http://localhost:4000/blogs/delete-blog/' + this.props.obj._id,
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
       
      <tr>
         <td>{this.props.obj.name}</td>
        <td>{this.props.obj.blog}</td>
        <td>
       
        <Button onClick={this.deleteBlog} size="sm" variant="danger">
        <DeleteIcon/>
         </Button>  
         
         </td>
        </tr>
       
     )
   }
  }
 /**/