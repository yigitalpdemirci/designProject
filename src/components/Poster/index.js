import React from 'react';
import './index.scss';

const Poster = () => {
  return (
    <div className="poster-page">
      <h1>Poster</h1>
      <div className="pdf-viewer-container">
        <iframe
          src="/designProject/documents/poster.pdf"
          title="Poster PDF"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Poster;