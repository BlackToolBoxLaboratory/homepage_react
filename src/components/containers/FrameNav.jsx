import React from 'react';

const FrameNav = () => {
  return (
    <div className='frame_nav' key="frameNav">
      <div className='nav_item-icon'>
        <div className="icon_content">{`BR`}</div>
      </div>
      <div className='nav_item-title'>
        <div className='title_main'>{`Black Tool Box Laboratory`}</div>
        <div className='title_sub'>{`for React`}</div>
      </div>
      <div className='nav_item-saludo'>
        <div className="saludo_content">{`¡Hola!`}</div>
      </div>
    </div>
  );
};

export default FrameNav;