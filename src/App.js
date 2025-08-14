import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import TurtleInfo from './TurtleInfo'; 
import translations from './translations';
import Contacts from './Contacts';
//import Gallery from './Gallery';
import GoogleSheetPDF from "./Catalog"; 

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang]; 

  return (
    <div className="App">
      <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center', 
          padding: '10px 20px', 
          backgroundColor: '#2c3e50', 
          color: 'white',
          height: '150px'
        }}>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Turtles of Kas Logo" style={{ height: 120, marginRight: 15 }} />
          <h1 style={{ fontSize: '1.5rem' }}>{t.title}</h1>
        </div>

        <div>
          <button onClick={() => setLang('en')} style={langBtnStyle}>EN</button>
          <button onClick={() => setLang('tr')} style={langBtnStyle}>TR</button>
          <button onClick={() => setLang('ru')} style={langBtnStyle}>RU</button>
        </div>
      </header>

      <main style={{ padding: 20 }}>
        <TurtleInfo />
        <GoogleSheetPDF /> 
        <Contacts />
      </main>
    </div>
  
  );
}

const langBtnStyle = {
  marginLeft: 8,
  padding: '6px 10px',
  fontSize: '1rem',
  backgroundColor: '#ecf0f1',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer'
};

export default App;