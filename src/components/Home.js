import React from 'react';


function Home() {
   const handleClick= ()=>{
     window.location.href = '/home';
    }
  return (
    <div>
      <h2>Home page</h2>
      <button onClick={handleClick}>
        Go to About
      </button>
    
    </div>
  );
}

export default Home;
