import React, { useState, useEffect } from 'react';

const Catalog = () => {
  const [pdfExists, setPdfExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Test if PDF is accessible
    const checkPDF = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/catalog.pdf`);
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/pdf')) {
            setPdfExists(true);
          } else {
            setError('File exists but is not a valid PDF');
          }
        } else {
          setError('PDF file not found');
        }
      } catch (err) {
        setError('Error loading PDF: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    checkPDF();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Catalog</h2>
        <div>Checking PDF...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Catalog</h2>
        <div
          style={{
            color: 'red',
            padding: '20px',
            backgroundColor: '#ffe6e6',
            borderRadius: '8px',
            margin: '20px auto',
            maxWidth: '500px',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <strong>Error:</strong> {error}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            Please make sure <code>catalog.pdf</code> is in your <code>public</code> folder.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Catalog</h2>

      {pdfExists && (
        <div style={{ margin: '0 auto', maxWidth: '100%' }}>
          {/* PDF Viewer using browser */}
          <div
            style={{
              border: '2px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f5',
              marginBottom: '20px',
            }}
          >
            <iframe
              src={`${process.env.PUBLIC_URL}/catalog.pdf`}
              width="100%"
              height="600px"
              title="PDF Catalog"
              style={{ border: 'none', display: 'block' }}
            >
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <p>Your browser doesn't support PDF viewing.</p>
                <a
                  href={`${process.env.PUBLIC_URL}/catalog.pdf`}
                  download="catalog.pdf"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    marginTop: '10px',
                  }}
                >
                  Download PDF
                </a>
              </div>
            </iframe>
          </div>

          {/* Alternative options */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={`${process.env.PUBLIC_URL}/catalog.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              🔗 Open in New Tab
            </a>

            <a
              href={`${process.env.PUBLIC_URL}/catalog.pdf`}
              download="catalog.pdf"
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#17a2b8',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              ⬇️ Download PDF
            </a>
          </div>

          <div
            style={{
              marginTop: '15px',
              fontSize: '12px',
              color: '#666',
              fontStyle: 'italic',
            }}
          >
            Having trouble viewing? Try opening in a new tab or downloading the PDF.
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
