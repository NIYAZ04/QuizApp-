import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-indicator-container">
      <div className="loading-spinner"></div>
      <p>Verifying user credentials...</p>
    </div>
  );
};

export default LoadingIndicator;
