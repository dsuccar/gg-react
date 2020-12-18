import React from 'react'
import { Link } from "react-router-dom"

export default function EmployeeList(props) {
  return (
    props.employees.map(e =>
      <div >
      <Link 
        key={e.id} 
        className="item" 
        onClick={() => props.updateEmployeeDetails(e)}
        to={`/employee/${e.id}`}>
      
      <h1>{e.firstName} </h1>  
    </Link>


  
   
    </div>
      
    )
   )
 }


