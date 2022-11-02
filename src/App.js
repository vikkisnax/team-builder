import './App.css';
import React, { useState } from 'react';
import Form from "./Components/Form";
import AddedMember from './Components/AddedMember.js';

function App() {
  const [member, setMembers] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: ""
    }]
  );
  
  //info will be a prop in a child component, which will add this info. we don't want to change state, we want to add to it
  const addNewMember = info => {
    const newMember = {
      id: Date.now(),
      name: info.name,
      email: info.email,
      role: info.role
    }
  
  setMembers([...member, newMember])
}

return (
    <div className='App'>
      <h1>Members:</h1>
      <Form addNewMember={addNewMember} />
      <AddedMember member={member} />
    </div>

  );

}

export default App;
