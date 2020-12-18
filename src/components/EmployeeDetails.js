import React from 'react'
import { Link } from "react-router-dom"

export default function EmployeeDetails(props) {
console.log("employee detail",props)
  return (
   
     <div>
       <div>{props.employee.firstName}</div>
       <div>{props.employee.lastName}</div>
       <div>{props.employee.hireDate}</div>
       <div>{props.employee.manager}</div>
       <div>{props.employee.position}</div>
       <div>{props.employee.salary}</div>
       <Link to={`/employee/${props.employee.id}/edit`}>
        <button>EDIT</button>
       </Link>
       <Link to={`/`}>
        <button>BACK</button>
       </Link>
       
    </div>
   
   
      )
    
   ;
 }


