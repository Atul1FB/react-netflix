 import React, { useState } from 'react';
 //import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
 import LoginForm from './components/loginForm';
 import Navbar from './components/Navbar';
 //import Home from './page/Home';
 //import About from './page/About';
 import Sidebar from './page/Sidebar';

    function App() { 

    const [mode ,setMode] = useState('light');

        const toggleMode = () => {
           const newMode = mode === 'light' ? 'dark' : 'light';
           setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? '#121212' : 'white';
  }; 
   
    return(
       
       <div>
        <Navbar title='My App' mode={mode} toggleMode={toggleMode}/>
       <Sidebar mode = {mode}/>
      
       <div style= {{marginLeft:'200px',padding:'20px',flex:1, color: mode ==='dark'? 'white':'black'}}>

       <div className='App' style={{display:'flex'}}>
      <div style={{padding:'20px', flex:1}}>
          
       <LoginForm mode= {mode}/>
    </div>
    </div>
    </div>
    </div>
    
  );
}
export default App;

