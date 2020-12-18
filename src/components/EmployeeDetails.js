import React from 'react'
import { Link } from "react-router-dom"
import {ListGroup, Button} from 'react-bootstrap'

export default function EmployeeDetails(props) {
console.log("employee detail",props)
  return (
  
   
     <div>
       <h1>Employee</h1>
        <ListGroup>
          <ListGroup.Item>First Name: {props.employee.firstName}</ListGroup.Item>
          <ListGroup.Item>Last Name: {props.employee.lastName}</ListGroup.Item>
          <ListGroup.Item>Hire Date: {props.employee.hireDate}</ListGroup.Item>
          <ListGroup.Item>Position: {props.employee.position}</ListGroup.Item>
          <ListGroup.Item>Salary: ${props.employee.salary},000</ListGroup.Item>
        </ListGroup>

       <Link to={`/employee/${props.employee.id}/edit`}>
       <Button variant="primary">Edit</Button>{' '}
       </Link>
       <Link to={`/`}>
       <Button variant="secondary">Back</Button>{' '}
       </Link>
       
    </div>
   
   
      )
    
   ;
 }


