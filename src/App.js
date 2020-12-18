import React, { useState, useEffect } from 'react'
import {Route,Switch} from "react-router-dom"
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

import SearchBar from './components/SearchBar'
import EmployeeList from './components/EmployeeList'
import EmployeeDetails from './components/EmployeeDetails'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import Navigation from './components/Navigation'

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

  }, [employeeDetails]
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

  function updateEmployee(info){
    fetch(`http://localhost:5000/employee/${employeeDetails.id}`, {
      method: "PATCH",
      headers: {
      "Content-Type" : "application/json",
          "Accept": "application/json"
        },
      body:JSON.stringify(info)
      }).then(res => res.json())
      .then(employee => setEmployeeDetails(employee))
      

    }
   
    function deleteEmployee(){
      console.log("test")
      fetch(`http://localhost:5000/employee/${employeeDetails.id}`, {
        method: "DELETE"
          }
      )
       
    
      }

  function updateEmployeeDetails(employee){
    setEmployeeDetails(employee)
  }
  
console.log(employees)
  
  return (
    <div>
      {/* formatting */}
      <Container>
      <Row>
      <Col></Col>
        <Col  xs={6}>

        <Navigation/>

          <Switch>
            <Route
              exact path="/"
              render={() => (
                <div>
                  <SearchBar searchText= {searchText} setSearchText= {setSearchText}/>
                  <EmployeeList employees={filteredEmployees} updateEmployeeDetails={updateEmployeeDetails} /> 
                </div>  )}/>
                
            <Route exact path="/employee/:employeeId" render={() => (<EmployeeDetails employee={employeeDetails} />)}/>
            <Route exact path="/employee/:employeeId/edit" 
              render={() => (<EditEmployee 
              employee={employeeDetails} 
              deleteEmployee={deleteEmployee} 
              updateEmployee={updateEmployee} /> )}/>
            <Route exact path='/add' render={()=> (<AddEmployee  addEmployee={addEmployee}/>)}/>
          </Switch>


        </Col>
        <Col>
        </Col>
        </Row>
        </Container>
     

  </div>
  )



    




            }
