import { useTranslation } from "react-i18next";
import SenderCircle from "./SenderCircle";
import sveta_freed from "./assets/freediving_obysova.jpg";
import seva_freed from "./assets/freediving_vsevolod.jpg"
import bougainville from "./assets/bougainville.jpg"
import nautilus from "./assets/nautilus.jpg"
import kanyon from "./assets/kanyon.jpg"
import culturekas from "./assets/culturekas.jpg"
import muti from "./assets/muti.jpg"

function SendersList() {
  const { t } = useTranslation();

  const senders = [
    { name: "Svetlana Obysova", avatar: sveta_freed, url: "https://www.instagram.com/freedivingkas_obysova/" },
    { name: "Vsevolod Atmazhitov", avatar: seva_freed, url: "https://www.instagram.com/freediving_vsevolod/" },
    { name: "Kanyon Diving", avatar: kanyon, url: "https://www.instagram.com/kanyondivingkas/" },
    { name: "BOUGAINVILLE DIVING", avatar: bougainville, url: "https://www.instagram.com/bougainvilledivecenter/" },
    { name: "Nautilus Dive Center", avatar: nautilus, url: "https://www.instagram.com/nautilusdivingkas/" },
    { name: "Kaş Kültür", avatar: culturekas, url: "https://www.instagram.com/culturekas/"},
    { name: "Muti Diving Center", avatar: muti, url: "https://www.instagram.com/mutidivingcenter/"}
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
