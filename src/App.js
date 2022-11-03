import './App.css';
import React, { useState } from 'react';
import Form from "./Components/Form";
import AddedMembers from './Components/AddedMembers.js';

function App() {
  const [members, setMembers] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: ""
    }]
  );

  // STRETCH - edit button - to edit one member
  const [memberToEdit, setMemberToEdit] = useState(null);

  //if I type info and submit, the info goes into the 1 index. the 0 index has empty strings. Each member has a unique id. w/o this, i can go to components - hooks - and see the array of objects in my state
  // console.log(member);

  //info will be a prop in a child component, which will add this info. we don't want to change state, we want to add to it
  const addNewMember = info => {
    const newMember = {
      id: Date.now(),
      name: info.name,
      email: info.email,
      role: info.role
    }
  setMembers([...members, newMember])
}

  //stretch - another function 
  const editMember = (editedMember) => {
    const updatedMembers = members.map(member => {
      // check to see if id of editedMember matches the member i'm looping through in map (member)
      // then return editedMember, if not then return the unedited member (member you're looping through)
      if (editedMember.id === member.id)
        {return editedMember} 
      else
      {return member}
    })
    setMembers([...updatedMembers])
    //next edit editMember in Form
  }


const fontColor = {color: "#BED3F3"};

return (
    <div className='App App-header'>
      <img className="App-logo" src="favicon.ico" alt="icon"/>
      <h1 style={fontColor}>Sign up:</h1>
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
      <AddedMembers members={members} setMemberToEdit={setMemberToEdit}/>
    </div>

  );

}


export default App;
