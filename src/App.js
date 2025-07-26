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
        <p>Welcome to the Turtles of Kas project!</p>

        <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>🐢 What Is Sea Turtle Photo-Identification?</h2>
        <p>
          Sea turtle photo-identification (photo-ID) is a non-invasive method used to identify and track
          individual turtles over time. It relies on capturing photographs of unique natural markings on
          a turtle's face, such as the patterns of scales on their cheeks. These markings are as
          distinctive as human fingerprints and remain consistent throughout the turtle's life.
        </p>
        <p>
          Unlike traditional tagging methods, photo-ID does not require physical contact with the
          turtles, making it a safe and ethical approach for both researchers and the animals.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>🌍 Why Is Photo-Identification Important?</h2>
        <ol>
          <li>
            <strong>Monitoring Population Health:</strong> By identifying and tracking individual turtles,
            researchers can estimate population sizes, monitor health trends, and assess the effectiveness
            of conservation efforts over time.
          </li>
          <li>
            <strong>Studying Migration Patterns:</strong> Sea turtles are known for their long-distance
            migrations across oceans. Photo-ID allows scientists to study these movements, understand
            habitat connectivity, and identify critical feeding and nesting areas.
          </li>
          <li>
            <strong>Assessing Human Impact:</strong> By analyzing re-sighted turtles, researchers can
            evaluate the impact of human activities, such as tourism and fishing, on turtle populations.
            This data is crucial for developing strategies to mitigate negative effects.
          </li>
          <li>
            <strong>Enhancing Conservation Strategies:</strong> Photo-ID provides reliable data that can
            inform conservation policies, habitat protection efforts, and public awareness campaigns,
            ultimately contributing to the preservation of sea turtle species.
          </li>
        </ol>
      </main>

    </div>
  );
}

export default App;
