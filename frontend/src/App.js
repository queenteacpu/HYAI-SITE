import React from "react";

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>
          🚀 Frontend is Working!
        </h1>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>
          This is a clean React app with no external dependencies
        </p>
        <p style={{ color: '#888', fontSize: '1rem', marginTop: '1rem' }}>
          Current time: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default App;
