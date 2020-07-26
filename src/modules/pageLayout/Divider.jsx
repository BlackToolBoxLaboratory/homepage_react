import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const Divider = () => {
  return (
    <div className="module-divider">
      <div className="divider_line"></div>
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <div className="divider_line"></div>
    </div>
  );
};

export default Divider;
