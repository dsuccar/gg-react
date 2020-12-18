import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Modal} from 'react-bootstrap'

export default function AddEmployee(props) {
// form components
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [hireDate, setHireDate] = useState("")
  const [position, setPosition] = useState("")
  const [manager, setManager] = useState("")
  const [salary, setSalary] = useState("")
  // modal componet and close functionality
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


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
    setShow(true)
  }

  
  return (
   
     
    <div>
      <h1>Add Employee</h1>
    <Form className="ui form" onSubmit={onSave}>
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
      In form of how many, thousand dollars employee will earn yearly
      </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
      Submit
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
//        <div>
          
//   <Form.Group>
//     <Form.Label>Salary</Form.Label>
//     <Form.Control className="ui field"
//             name="Salary"
//             value={salary}
//             onChange={e => setSalary(e.target.value)}  />
//     <Form.Text className="text-muted">
//       In form of how many, thousand dollars employee will earn yearly
//     </Form.Text>
//   </Form.Group>
//   </Form>
//   <Button className="ui button" variant="primary" type="submit">
//     Submit
//   </Button>
 
  
// <form className="ui form" onSubmit={onSave}>
//     <input
//       className="ui field"
//       name="First Name"
//       value={firstName}
//       onChange={e => setFirstName(e.target.value)}
//       placeHolder="First Name"
//     />
//     <input
//       className="ui field"
//       name="Last Name"
//       value={lastName}
//       onChange={e => setLastName(e.target.value)}
//       placeHolder="Last Name"
//     />
//     <input
//       className="ui field"
//       name="Hire Date"
//       value={hireDate}
//       onChange={e => setHireDate(e.target.value)}
//       placeHolder="Hire Date"
//     />
//     <input
//       className="ui field"
//       name="Position"
//       value={position}
//       onChange={e => setPosition(e.target.value)}
//       placeHolder="Position"
//     />
//     <input
//       className="ui field"
//       name="Manager"
//       value={manager}
//       onChange={e => setManager(e.target.value)}
//       placeHolder="Manager"
//     />
//     <input
//       className="ui field"
//       name="Salary"
//       value={salary}
//       onChange={e => setSalary(e.target.value)}
//       placeHolder="Salary"
//     />
//     <Link to={`/`}>
//       <button className="ui button" type="button">
//         Back
//       </button>
//     </Link>
//     <button className="ui button" type="submit">
//       Save
//     </button>
//   </form> 
        
//       </div>
    
   
      )
    
   
 }