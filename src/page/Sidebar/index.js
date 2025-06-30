import React,{useState}from 'react';

function Sidebar({mode}) {

    const [isOpen,setIsOpen] = useState(false);
   
  const  toggleSidebar = () =>{
    setIsOpen(!isOpen) 
   
     
  }
  return (
    <div className='app'>
        <button className='Sidebar' onClick={toggleSidebar}> =  </button>
           
            <div className={`sidebar ${isOpen ? 'open ' : 'closed '}`}>
            <ul>
                <li style={{
                    color:mode === 'dark' ? '#000000' : '#ffffff'
                }}>Profile</li>
                <li style={{
                    color:mode === 'dark' ? '#000000' : '#ffffff'
                }}>Contacts</li>
                <li style={{
                    color:mode === 'dark' ? '#000000' : '#ffffff'
                }}>Setting</li>
            </ul>
        </div>
      
    </div>
  );
}

export default Sidebar;
