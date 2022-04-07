import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Adduser from './components/adduserComponent'
import HomePage from './components/homeComponent'
import Showuser from './components/showuserComponent'
import AddMyblog from './components/addblogComponent.js'
import Showblog from './components/showblogComponent.js'
import Updatemyuser from './components/updatemyuserComponent.js'



function App() {
  
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
             <Navbar bg="dark" expand="lg" variant="dark">
        
             <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">  WELCOME TO NEXTHOUGHT  </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               < Nav className="me-auto">
                <Nav className="justify-content-end">
              <Nav>
                <Link to={'/'} className="nav-link">HOME  </Link>   
              </Nav>
                <Nav>
                  <Link to={'/add-user'} className="nav-link">ADD USER  </Link>
                </Nav>
                <Nav>
                  <Link to={'/show-user'} className="nav-link">SHOW USER  </Link>
                </Nav>
                <Nav>
                  <Link to={'/show-blog'} className="nav-link">SHOW BLOG  </Link>
                </Nav>
                <Nav>
                  <Link to={'/add-blog'} className="nav-link">ADD BLOG </Link>
                </Nav>
                </Nav>
              </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
      </header>
      <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
              <Routes>                               
              <Route exact path="/" element={<HomePage/>}/>  
              <Route  exact  path="/add-user" element={<Adduser/>} />  
              <Route  exact  path="/update-user/:id" element={(props) => <Updatemyuser{...props}/>} />   
              <Route  exact path="/show-user"element={<Showuser/>}  /> 
              <Route  exact path="/add-blog" element={<AddMyblog/>} /> 
              <Route exact path="/show-blog" element={<Showblog/>}  /> 
              </Routes>   
              </div> 
             </Col>                   
            </Row>
           </Container>
    </Router>
</div>
  )
}
export default App;
      
      

       
      
                  
           
                
               
                 
                
                
       
      
    
   
 




                 
               
                                           
                   
                  
                   
                 
                                       
                   
                               
                   
                 
                                            
                   
                    
                 
                  
                                          
                   
                 
                                          
                    
                  
               
               
                
            
           