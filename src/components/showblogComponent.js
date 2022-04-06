import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Bloglist from './bloglistComponent';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';

export default class Showblog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/blogs/blog')
      .then(res => {
        this.setState({
          blogs: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.blogs.map((res, i) => {
      return <Bloglist obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper-showuser">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th>Blog</th>
            <th>Action </th>
            
           
          </tr>
        </thead>
        <tbody>
         
          {this.DataTable()}
          
        </tbody>
      </Table>
      
    </div>);
  }
}