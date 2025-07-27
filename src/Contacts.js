function Contacts() {
  return (
    <div style={{ padding: 20, borderTop: '1px solid #ccc', marginTop: 30 }}>
      <h3>Contact us directly</h3>
      <p>Email: <a href="mailto:your-email@example.com">lkrinova@gmail.com</a></p>
      
      <p>WhatsApp:</p>
      <img 
        src="https://api.qrserver.com/v1/create-qr-code/?data=https://wa.me/905521521895&size=150x150" 
        alt="WhatsApp QR Code" 
        style={{ width: 150, height: 150 }} 
      />
      
      <p>Telegram: <a href="https://t.me/proseacode" target="_blank" rel="noreferrer">@proseacode</a></p>
    </div>
  );
}

export default Contacts;
