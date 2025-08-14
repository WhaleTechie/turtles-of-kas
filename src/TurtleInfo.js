import React from 'react';
import { Trans } from 'react-i18next';
import turtle1 from './assets/turtle1.jpg'; 
import turtle2 from './assets/turtle2.jpg';

function TurtleInfo() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.7' }}>
      
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        <Trans>🐢 About the Project</Trans>
      </h2>
      <p>
        <Trans>
          Sea turtles are vital to the health of marine ecosystems like coral reefs and seagrass meadows.
          In Kaş, we’re using <strong>non-invasive photo-identification</strong> to study and protect these incredible creatures.
          By photographing or filming a turtle from any clear angle — including the <strong>left, right, or top</strong> — 
          we can recognize individual turtles, track their movements, and learn where they like to rest and feed.
        </Trans>
      </p>
      <p>
        <Trans>
          With this knowledge, we can help ensure the <strong>long-term conservation</strong> of sea turtles in the region.
        </Trans>
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>
        <Trans>📸 Turtle Photo/Video ID – How You Can Get Involved</Trans>
      </h2>
      <p>
        <Trans>
          Every turtle has a unique pattern — like a fingerprint! By capturing clear images or videos of these markings from any angle,
          we can identify turtles and match them to an international photo database.
        </Trans>
      </p>
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
        <p><Trans>Learn about individual turtle behaviors</Trans></p>
        <p><Trans>Monitor population health</Trans></p>
        <p><Trans>Discover migration routes and feeding grounds</Trans></p>
        <p><Trans>Protect critical habitats</Trans></p>
      </div>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>
        <Trans>🌊 Your Role as a Citizen Scientist</Trans>
      </h2>
      <p>
        <Trans>
          To succeed, we need <strong>your help</strong> — snorkelers, divers, and ocean lovers in Kaş. 
          The more quality photos or videos we collect, the better we can understand and protect these animals.
        </Trans>
      </p>
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
        <p><Trans>Take clear, close-up photos or videos of the turtle from any angle (left, right, or top)</Trans></p>
        <p><Trans>Keep a safe distance so the turtle is relaxed and natural</Trans></p>
        <p><Trans>Log the <strong>date and location</strong></Trans></p>
        <p><Trans>Submit your content to this project</Trans></p>
      </div>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>
        <Trans>🔍 Can You Tell if It's the Same Turtle?</Trans>
      </h2>
      <p>
        <Trans>
          Look closely at these two cheekprints… 🧐 Do they belong to the same turtle? 
          This is the essence of photo/video ID — finding matches between turtles based on unique facial or shell patterns.
        </Trans>
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '1rem' }}>
        <img 
          src={turtle1} 
          alt={<Trans>Turtle cheekprint 1</Trans>} 
          style={{ width: '45%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', objectFit: 'contain' }} 
        />
        <img 
          src={turtle2} 
          alt={<Trans>Turtle cheekprint 2</Trans>} 
          style={{ width: '45%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', objectFit: 'contain' }} 
        />
      </div>
      <p style={{ fontSize: '0.8rem', color: '#555', marginTop: '6px' }}>
        <Trans>From videos of Svetlana Obysova ©</Trans>
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>
        <Trans>📷 How to Take Useful Turtle Photos or Videos</Trans>
      </h2>
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
        <p><Trans>Capture the turtle’s facial or shell patterns from any clear angle</Trans></p>
        <p><Trans>Keep a safe distance and let the turtle move freely</Trans></p>
        <p><Trans>Use zoom if needed — don’t get too close</Trans></p>
        <p><Trans>Never touch or chase a turtle</Trans></p>
      </div>
      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        <Trans>
          The more relaxed the turtle is, the more likely it is to stay nearby — 
          letting others enjoy it and take useful photos or videos.
        </Trans>
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>
        <Trans>💸 Why Sea Turtles Matter (to Nature and to Us)</Trans>
      </h2>
      <p>
        <Trans>
          Sea turtles do more than just inspire awe — they play a key role in keeping the ocean healthy:
        </Trans>
      </p>
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
        <p><Trans>They control jellyfish and sponge populations</Trans></p>
        <p><Trans>They support coral reef growth and biodiversity</Trans></p>
        <p><Trans>Their presence boosts <strong>eco-tourism and local fisheries</strong></Trans></p>
      </div>
      <p>
        <Trans>
          In short: <strong>Protecting sea turtles helps protect Kaş’s marine beauty and economy</strong>.
          By working <strong>with</strong> sea turtles, we protect both <strong>nature and community livelihoods</strong>.
        </Trans>
      </p>
    </div>
  );
}

export default TurtleInfo;
