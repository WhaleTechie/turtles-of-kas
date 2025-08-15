import React from 'react';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 20, borderTop: '1px solid #ccc', marginTop: 30 }}>
      <h3>{t('contacts.title')}</h3>
      
      <p>
        {t('contacts.email')}: <a href="mailto:lkrinova@gmail.com">lkrinova@gmail.com</a>
      </p>
      
      <p>{t('contacts.whatsapp')}:</p>
      <img 
        src="https://api.qrserver.com/v1/create-qr-code/?data=https://wa.me/905521521895&size=150x150" 
        alt="WhatsApp QR Code" 
        style={{ width: 150, height: 150 }} 
      />
      
      <p>
        {t('contacts.telegram')}: <a href="https://t.me/proseacode" target="_blank" rel="noreferrer">@proseacode</a>
      </p>
    </div>
  );
}

export default Contacts;
