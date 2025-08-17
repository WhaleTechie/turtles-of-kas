import { useTranslation } from "react-i18next";
import SenderCircle from "./SenderCircle";
import sveta_freed from "./assets/freediving_obysova.jpg";

function SendersList() {
  const { t } = useTranslation();

  const senders = [
    { name: "Svetlana Obysova", avatar: sveta_freed, url: "https://www.instagram.com/freedivingkas_obysova/" },
    { name: "TechCorp", avatar: "https://example.com/techcorp.jpg", url: "https://techcorp.com" },
    { name: "Charlie", avatar: "https://example.com/charlie.jpg" },
    { name: "David", avatar: "https://example.com/david.jpg" },
    { name: "Eva", avatar: "https://example.com/eva.jpg" },
  ];

  return (
    <section style={{ marginTop: "30px" }}>
      <h2 style={{ marginBottom: "15px" }}>{t('contributors.title')}</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "10px",
          padding: "10px",
        }}
      >
        {senders.map((s) => (
          <SenderCircle key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}

export default SendersList;
