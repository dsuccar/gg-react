import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button, Form, Modal } from 'react-bootstrap'

export default function AddEmployee(props) {

// Form components
  const [firstName, setFirstName] = useState(props.employee.firstName)
  const [lastName, setLastName] = useState(props.employee.lastName)
  const [hireDate, setHireDate] = useState(props.employee.hireDate)
  const [position, setPosition] = useState(props.employee.position)
  const [manager, setManager] = useState(props.employee.manager)
  const [salary, setSalary] = useState(props.employee.salary)

// modal componet and cancel functionality
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 
  
  
  
    
     
  
    
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
    props.updateEmployee(info)
    setShow(true)

  }
console.log("edit employee show",show)

  return (
   
     
       <div>
         <h2>Edit Employee</h2>
         <Form className="ui form" onSubmit={onUpdate}>
  <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control  className="ui field"
            name="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}  />
   
  </Form.Group>

  <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control  className="ui field"
            name="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)} />
    
  </Form.Group>

  <Form.Group>
    <Form.Label>Hire Date</Form.Label>
    <Form.Control  className="ui field"
            name="Hire Date"
            value={hireDate}
            onChange={e => setHireDate(e.target.value)}  />
    <Form.Text className="text-muted">
      DD/MM/YYYY
    </Form.Text>
  </Form.Group>

  <Form.Group>
    <Form.Label>Position</Form.Label>
    <Form.Control  className="ui field"
            name="Position"
            value={position}
            onChange={e => setPosition(e.target.value)}  />
  </Form.Group>

  <Form.Group>
    <Form.Label>Manager</Form.Label>
    <Form.Control  className="ui field"
            name="Manager"
            value={manager}
            onChange={e => setManager(e.target.value)}  />
    
  </Form.Group>

  <Form.Group>
    <Form.Label>Salary</Form.Label>
    <Form.Control className="ui field"
            name="Salary"
            value={salary}
            onChange={e => setSalary(e.target.value)}  />
    <Form.Text className="text-muted">
      in form of yearly income. ex. 90 = 90,000 yearly sallary
    </Form.Text>
  </Form.Group>



  <Button variant="primary" type="submit">
    Submit Changes
  </Button>

  <Button variant="danger" onClick={props.deleteEmployee} type="delete"> 
    Delete Employee
  </Button>

</Form>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request Complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Information has been updated and saved</Modal.Body>
        <Modal.Footer>
          <Link to={`/`}>
          <Button variant="primary" onClick={handleClose}>
            Home
          </Button>
          </Link>
        </Modal.Footer>
        </Modal>


      </div>
  )}