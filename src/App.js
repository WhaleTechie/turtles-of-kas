// App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './assets/logo.jpg';
import './App.css';
import TurtleInfo from './TurtleInfo';
import Contacts from './Contacts';
import Catalog from "./Catalog";
import './i18n';
import { Twemoji } from 'react-emoji-render';
import SendersList from "./SendersList";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <img src={logo} alt={t('title')} style={{ height: 120, marginRight: 15 }} />
          <h1 style={{ fontSize: '1.5rem' }}>{t('title')}</h1>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => changeLanguage('en')} style={emojiBtnStyle}>
            <Twemoji text="🇬🇧" />
          </button>
          <button onClick={() => changeLanguage('tr')} style={emojiBtnStyle}>
            <Twemoji text="🇹🇷" />
          </button>
          <button onClick={() => changeLanguage('ru')} style={emojiBtnStyle}>
            <Twemoji text="🇷🇺" />
          </button>
        </div>
      </header>

      <main style={{ padding: 20 }}>
        <TurtleInfo />
        <Catalog />
        <SendersList />
        <Contacts t={t} />
      </main>
    </div>
  );
}

const emojiBtnStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: '1.5rem',
};

export default App;
