import React, { useState } from 'react';
import MemberCard from './components/MemberCard';
import Form from './components/Form';
import './App.css';

function App() {

const [ teamMembers, setTeamMembers] = useState([{
  // id: 1,
  // name: 'Jesslin James',
  // email: 'jj@sexy.com',
  // role: 'Front-End Development'
}]);

// Card format
const addMember = card => {
  console.log(card)
  const newCard = {
    id: Math.floor(Math.random() * Date.now()),
    name: card.name,
    email: card.email,
    role: card.role
  };
  setTeamMembers([...teamMembers, newCard]);
}

  return (
    <div>
      <Form addMember={addMember} />
      <MemberCard teamMembers={teamMembers} />
   </div>
  );
}

export default App;
