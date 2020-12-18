import React from 'react'
import { Link } from "react-router-dom"
import {Card} from 'react-bootstrap'

export default function EmployeeList(props) {
  return (
    
    props.employees.map(e =>
        <Card key={e.id}>
  <Card.Body>
    <Card.Title>{e.firstName}, {e.lastName}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{e.position}</Card.Subtitle>
    <Link      
        className="item" 
        onClick={() => props.updateEmployeeDetails(e)}
        to={`/employee/${e.id}`}>
    <div>Edit Info</div>
    </Link>
  
  </Card.Body>
</Card>



     

  
   
    
      
    )
   )
 }


