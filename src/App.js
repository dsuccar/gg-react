import React, { useState, useEffect } from 'react'
import {Route,Switch} from "react-router-dom"
import './App.css';

import SearchBar from './components/SearchBar'
import EmployeeList from './components/EmployeeList'
import EmployeeDetails from './components/EmployeeDetails'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'

export default function App() { 
  const [employeeDetails, setEmployeeDetails] = useState(null)
  const [employees, setEmployees] = useState([])
  const [searchText, setSearchText] = useState("")
  const [filteredEmployees, setFilteredEmployees] = useState([])
 



  useEffect(() => {
    fetch(`http://localhost:5000/employees`)
    .then(res => res.json())
    .then(employees => {
      setEmployees(employees)
    })

  }, []
  )


  useEffect(() =>{
    setFilteredEmployees( employees.filter(e =>{
      return e.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      e.lastName.toLowerCase().includes(searchText.toLowerCase())
    })
    ) 
      },[searchText, employees])

   function addEmployee(info){
    fetch(`http://localhost:5000/employee`, {
    method: "POST",
    headers: {
    "Content-Type" : "application/json",
        "Accept": "application/json"
      },
    body:JSON.stringify(info)
    }).then(resp =>resp.json())
    .then(newEmployee => setEmployees([...employees,newEmployee]))
  }


  

  function updateEmployeeDetails(employee){
    setEmployeeDetails(employee)
  }
  
console.log(employees)
  
  return (
    <div>
      <h1>sup?</h1>
      
      
        <Switch>
       
          <Route
            exact path="/"
            render={() => (
              <div>
                <SearchBar searchText= {searchText} setSearchText= {setSearchText}/>
                <EmployeeList employees={filteredEmployees} updateEmployeeDetails={updateEmployeeDetails} /> 
              </div>  )}/>

          <Route exact path="/employee/:employeeId" render={() => (<EmployeeDetails employee={employeeDetails} />)}/>
          <Route exact path="/employee/:employeeId/edit" render={() => (<EditEmployee employee={employeeDetails} /> )}/>
          <Route exact path='/add' render={()=> (<AddEmployee  addEmployee={addEmployee}/>)}/>
        </Switch>
                
      
     

  </div>
  )



    




            }
