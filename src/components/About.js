  import React from 'react';
  const About = ()=>{
    function handleClick(){
      window.location.href = '/';
    };
   
   return (
    <div>
     <h2> About page</h2> 
    <button onClick={handleClick} >
     Go to home
    </button>
    </div>
  );
};

 export default About;
