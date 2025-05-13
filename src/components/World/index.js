import React from 'react';
import './index.scss';

const World = () => {
  return (
    <div className="world-page">
      <h1>World</h1>
      <p>
        You can access our demo below.<br />
        To orbit around the planet, hold down the left mouse button.<br />
        Zoom in to descend to the surface, then use the WASD keys to move and Spacebar to jump.<br />
        At any time, you may zoom out to return to the planetary view.
      </p>
      <div className="iframe-container">
        <iframe
          src="http://localhost:8000"
          title="Demo"
          className="embedded-iframe"
        />
      </div>
    </div>
  );
};

export default World;