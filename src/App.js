import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import TurtleInfo from './TurtleInfo'; // adjust path if needed

function App() {
  return (
    <div className="App">
      <header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '10px 20px', 
          backgroundColor: '#2c3e50', 
          color: 'white',
          height: '150px'
        }}>
        <img src={logo} alt="Turtles of Kas Logo" style={{ height: 120, marginRight: 15 }} />
        <h1>Turtles of Kas - Citizen Science Project</h1>
      </header>

      <main style={{ padding: 20 }}>
        <TurtleInfo />
      </main>

    </div>
  );
}

export default App;
