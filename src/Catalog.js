import React from 'react';
import { useTranslation } from 'react-i18next';

function CatalogViewer() {
  const { t } = useTranslation();

  return (
    <div style={{ height: "850px", display: "flex", flexDirection: "column" }}>
      <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "10px" }}>
        {t('catalog.updated', { date: '14.08.2025' })}
      </p>
      <iframe
        src="https://drive.google.com/file/d/1QrtqPOAoNTzPaSr8k6QiTUQFbciO19Xw/preview"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Catalog PDF"
      ></iframe>
    </div>
  );
}

export default CatalogViewer;
