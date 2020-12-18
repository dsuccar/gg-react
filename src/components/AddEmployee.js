import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function AddEmployee(props) {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [hireDate, setHireDate] = useState("")
  const [position, setPosition] = useState("")
  const [manager, setManager] = useState("")
  const [salary, setSalary] = useState("")
  // const [employees, setEmployees] = useState([])
  // const [searchText, setSearchText] = useState("")
  // const [filteredEmployees, setFilteredEmployees] = useState([])

  function onSave(e){
    e.preventDefault()
    let info = {
      firstName: firstName,
      lastName: lastName,
      hireDate: hireDate,
      position: position,
      manager: manager,
      salary: salary
    }
    props.addEmployee(info)
  }

  return (
   
     
       <div className="ui centered card">
        <form className="ui form" onSubmit={onSave}>
          <input
            className="ui field"
            name="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeHolder="First Name"
          />
          <input
            className="ui field"
            name="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeHolder="Last Name"
          />
          <input
            className="ui field"
            name="Hire Date"
            value={hireDate}
            onChange={e => setHireDate(e.target.value)}
            placeHolder="Hire Date"
          />
          <input
            className="ui field"
            name="Position"
            value={position}
            onChange={e => setPosition(e.target.value)}
            placeHolder="Position"
          />
          <input
            className="ui field"
            name="Manager"
            value={manager}
            onChange={e => setManager(e.target.value)}
            placeHolder="Manager"
          />
          <input
            className="ui field"
            name="Salary"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            placeHolder="Salary"
          />
          <Link to={`/`}>
            <button className="ui button" type="button">
              Back
            </button>
          </Link>
          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
    
   
   
      )
    
   ;
 }