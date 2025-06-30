import React from 'react';

export default function Navbar({ title = "MyApp", mode = "light", toggleMode }) {
  const isDark = mode === 'dark';

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: isDark ? '#333' : '#f0f0f0',
      color: isDark ? 'white' : 'black'
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{title}</span>
        
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <a href="/" style={{ textDecoration: 'none', color: isDark ? 'white' : 'black' }}>Home</a>
        <a href="/about" style={{ textDecoration: 'none', color: isDark ? 'white' : 'black' }}>About</a>

        <button onClick={toggleMode} style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: isDark ? '#6c757d' : '#007bff',
          color: 'white'
        }}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
