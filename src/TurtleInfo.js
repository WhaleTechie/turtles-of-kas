import React from 'react';
import turtle1 from './assets/turtle1.jpg'; 
import turtle2 from './assets/turtle2.jpg';

function TurtleInfo() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.7' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐢 About the Project </h2>
      <p>
        Sea turtles are vital to the health of marine ecosystems like coral reefs and seagrass meadows.
        In Kaş, we’re using <strong>non-invasive photo-identification</strong> to study and protect these incredible creatures.
        By photographing a turtle’s unique <strong>“cheekprint”</strong> — the pattern of scales on the side of its face — 
        we can recognize individual turtles, track their movements, and learn where they like to rest and feed.
      </p>
      <p>
        With this knowledge, we can help ensure the <strong>long-term conservation</strong> of sea turtles in the region.
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>📸 Turtle Photo ID – How You Can Get Involved</h2>
      <p>
        Every turtle has a unique facial pattern — like a fingerprint! By capturing clear images of these markings,
        especially from the <strong>right side of the face</strong>, we can identify turtles and match them to an
        international photo database.
      </p>
      <ul style={{ marginLeft: '1rem' }}>
        <p>Learn about individual turtle behaviors</p>
        <p>Monitor population health</p>
        <p>Discover migration routes and feeding grounds</p>
        <p>Protect critical habitats</p>
      </ul>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>🌊 Your Role as a Citizen Scientist</h2>
      <p>
        To succeed, we need <strong>your help</strong> — snorkelers, divers, and ocean lovers in Kaş. 
        The more quality photos we collect, the better we can understand and protect these animals.
      </p>
      <ul style={{ marginLeft: '1rem' }}>
        <p>Take clear, close-up photos of the <strong>right side</strong> of a turtle’s face</p>
        <p>Log the <strong>date and location</strong></p>
        <p>Submit your photos or videos to this project</p>
      </ul>

       <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>🔍 Can You Tell if It's the Same Turtle?</h2>
      <p>
        Look closely at these two cheekprints… 🧐 Do they belong to the same turtle? 
        This is the essence of photo-ID — finding matches between turtles based on facial scale patterns.
      </p>

      {/* Image container */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '1rem' }}>
  <img 
    src={turtle1} 
    alt="Turtle cheekprint 1" 
    style={{ 
      width: '45%', 
      height: 'auto',          // keep natural height 
      borderRadius: '8px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
      objectFit: 'contain'    // keep aspect ratio inside the box
    }} 
  />
  <img 
    src={turtle2} 
    alt="Turtle cheekprint 2" 
    style={{ 
      width: '45%', 
      height: 'auto', 
      borderRadius: '8px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
      objectFit: 'contain' 
    }} 
  />
  
</div>
<p style={{ fontSize: '0.8rem', color: '#555', marginTop: '6px' }}>
  From videos of Svetlana Obysova ©
</p>

      <p>
        Look closely at these two cheekprints… 🧐 Do they belong to the same turtle? 
        This is the essence of photo-ID — finding matches between turtles based on facial scale patterns.
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>📷 How to Take Useful Turtle Photos or Videos</h2>
      <ul style={{ marginLeft: '1rem' }}>
        <p>✅ Focus on the turtle’s <strong>facial profile</strong> (especially the right side)</p>
        <p>✅ Use <strong>zoom</strong> — don’t get too close</p>
        <p>✅ Stay calm and let the turtle move freely</p>
        <p>❌ Never touch or chase a turtle</p>
      </ul>
      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        The more relaxed the turtle is, the more likely it is to stay nearby —
        letting others enjoy it and take great photos too.
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>💸 Why Sea Turtles Matter (to Nature and to Us)</h2>
      <p>
        Sea turtles do more than just inspire awe — they play a key role in keeping the ocean healthy:
      </p>
      <ul style={{ marginLeft: '1rem' }}>
        <p>They control jellyfish and sponge populations</p>
        <p>They support coral reef growth and biodiversity</p>
        <p>Their presence boosts <strong>eco-tourism and local fisheries</strong></p>
      </ul>
      <p>
        In short: <strong>Protecting sea turtles helps protect Kaş’s marine beauty and economy</strong>.
        By working <strong>with</strong> sea turtles, we protect both <strong>nature and community livelihoods</strong>.
      </p>
    </div>
  );
}

export default TurtleInfo;
