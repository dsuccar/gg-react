import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function AddEmployee(props) {

  const [firstName, setFirstName] = useState(props.employee.firstName)
  const [lastName, setLastName] = useState(props.employee.lastName)
  const [hireDate, setHireDate] = useState(props.employee.hireDate)
  const [position, setPosition] = useState(props.employee.position)
  const [manager, setManager] = useState(props.employee.manager)
  const [salary, setSalary] = useState(props.employee.salary)
  // const [employees, setEmployees] = useState([])
  // const [searchText, setSearchText] = useState("")
  // const [filteredEmployees, setFilteredEmployees] = useState([])
  function updateEmployee(info){
    fetch(`http://localhost:5000/employee/${props.employee.id}`, {
      method: "PATCH",
      headers: {
      "Content-Type" : "application/json",
          "Accept": "application/json"
        },
      body:JSON.stringify(info)
      })
      

    }

  function deleteEmployee(){
    console.log("test")
    fetch(`http://localhost:5000/employee/${props.employee.id}`, {
      method: "DELETE"
        }
    )
    
     
  }
    
  function onUpdate(e){
    e.preventDefault()
    let info = {
      firstName: firstName,
      lastName: lastName,
      hireDate: hireDate,
      position: position,
      manager: manager,
      salary: salary
    }
    updateEmployee(info)

  }

  return (
   
     
       <div className="ui centered card">
        <form className="ui form" onSubmit={onUpdate}>
          <input
            className="ui field"
            name="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            
          />
          <input
            className="ui field"
            name="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            
          />
          <input
            className="ui field"
            name="Hire Date"
            value={hireDate}
            onChange={e => setHireDate(e.target.value)}
            
          />
          <input
            className="ui field"
            name="Position"
            value={position}
            onChange={e => setPosition(e.target.value)}
            
          />
          <input
            className="ui field"
            name="Manager"
            value={manager}
            onChange={e => setManager(e.target.value)}
            
          />
          <input
            className="ui field"
            name="Salary"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            
          />
          {/* <Link to={`/`}>
            <button className="ui button" type="button">
              Back
            </button>
          </Link> */}
          
            <button onClick={deleteEmployee}>
              Delete
            </button>
      
          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
  )}