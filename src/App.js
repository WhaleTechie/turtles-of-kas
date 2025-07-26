import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '10px 20px', 
          backgroundColor: '#2c3e50', 
          color: 'white' 
        }}>
        <img src={logo} alt="Turtles of Kas Logo" style={{ height: 50, marginRight: 15 }} />
        <h1>Turtles of Kas</h1>
      </header>

      <main style={{ padding: 20 }}>
        {/* Your main content here */}
        <p>Welcome to the Turtles of Kas project!</p>
      </main>
    </div>
  );
}

export default App;
