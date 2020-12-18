import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default function Navigation() {
  return (
  <div>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand>Roll Call</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/add">Add Employee</Nav.Link>
    </Nav>
    </Navbar>
  </div>  
   
    
      
    )
 }


