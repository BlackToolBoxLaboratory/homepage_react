import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const LoadingDiv = () => {
  return (
    <div className="module-loading">
      <FAI className="loading_spinner" icon={['fas', 'spinner']} fixedWidth spin pulse />
    </div>
  );
};

export default LoadingDiv;
