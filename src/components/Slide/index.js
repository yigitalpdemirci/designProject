import React from 'react';
import './index.scss';

const Slide = () => {
  return (
    <div className="slide-page">
      <h1>Sunum</h1>
      <div className="pdf-viewer-container">
        <iframe
          src="/designProject/documents/presentation.pdf" // Assuming the presentation will be here
          title="Sunum PDF"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Slide;