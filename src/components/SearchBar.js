import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

export default function SearchBar(props) {

  return (
   <div>

    <InputGroup >
    <FormControl
      type="text"
      placeholder="Search by name"
      value={props.searchText}
      onChange={e => props.setSearchText(e.target.value)}
      />
   </InputGroup>
 
    
   </div>
  );
}