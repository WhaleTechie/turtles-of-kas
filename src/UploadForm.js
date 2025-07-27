import React from 'react';

function UploadForm() {
  return (
    <div style={{ maxWidth: '700px', margin: '3rem auto', padding: '2rem', background: '#f9f9f9', borderRadius: '12px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📩 Submit Your Turtle Photo or Video</h2>
      <p style={{ marginBottom: '1rem' }}>
        If you’ve seen a sea turtle while diving or snorkeling in Kaş, please help our research by submitting a clear photo or video, where we can identify the unique "cheekprint" pattern.
      </p>
      <p style={{ marginBottom: '1.5rem' }}>
        Each submission helps us better understand individual turtles, their movements, and habitats. Thank you! 💙
      </p>

      <form
        action="https://formsubmit.co/lkrinova@gmail.com" 
        method="POST"
        encType="multipart/form-data"
      >
        <label>Name (optional)</label><br />
        <input type="text" name="name" style={inputStyle} /><br />

        <label>Email (optional)</label><br />
        <input type="email" name="email" style={inputStyle} /><br />

        <label>Date & Location</label><br />
        <input type="text" name="location" placeholder="e.g. 2024-08-15, Kaş Canyon" style={inputStyle} /><br />

        <label>Upload Photo or Video *</label><br />
        <input type="file" name="attachment" accept="image/*,video/*" required style={inputStyle} /><br />

        {/* Hidden settings */}
        <input type="hidden" name="_subject" value="New Turtle Submission" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://whaletechie.github.io/turtles-of-kas/thanks" />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  margin: '0.5rem 0 1rem',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  backgroundColor: '#007B7F',
  color: '#fff',
  padding: '0.6rem 1.2rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem'
};

export default UploadForm;
