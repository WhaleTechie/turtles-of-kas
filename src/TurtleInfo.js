import React from 'react';
import { useTranslation } from 'react-i18next';

function TurtleInfo() {
  const { t } = useTranslation();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.7' }}>
      
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐢 {t('about.title')}</h2>
      <p>{t('about.text')}</p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>📸 {t('help.title')}</h2>
      <p>{t('help.text')}</p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>🔍 {t('cheekprint.title')}</h2>
      <p>{t('cheekprint.text')}</p>
    </div>
  );
}

export default TurtleInfo;
