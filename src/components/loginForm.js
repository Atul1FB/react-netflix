 import React, { useState } from 'react';
 import { Navigate } from 'react-router-dom';


 export default function LoginForm({ mode = 'light' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault(); 

    if(email && password){
      alert(`logged in as: ${email}`);  
    
   console.log('Email:', email);
   alert(`Logged in with email: ${email}`);
   navigator=('/Home');
    }
  };

  const isDark = mode === 'dark';

  return (

    <div>
      <h2 style={{ color: isDark ? 'white' : 'black' }}>Welcome Back</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '20px auto',
  },

  input: {
    marginBottom: '12px',
    padding: '10px',
    fontSize: '16px',
  },

  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
 
  
};
