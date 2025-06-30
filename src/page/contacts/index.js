import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function Contacts() {
  const [mode, setMode] = useState('light');
  const navigate = useNavigate(); 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <>
    <div  className='Contacts page'>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      
        <h2>Contacts</h2>
        <button onClick={handleClick}></button>
      </div>
    </>
  );
}
