// src/SenderCircle.js
function SenderCircle({ name, avatar, url }) {
  const circle = (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <img
        src={avatar}
        alt={name}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #ff4500",
          cursor: url ? "pointer" : "default",
        }}
      />
      <p style={{ fontSize: "12px", marginTop: "5px" }}>{name}</p>
    </div>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {circle}
    </a>
  ) : (
    circle
  );
}

export default SenderCircle;
