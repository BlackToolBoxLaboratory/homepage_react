import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const Head = (props) => {
  return (
    <header className={["btb-layout-head", props.className].join(' ')}>
      <div className="head_logo">
        <div className="logo_content">
          BR
        </div>
      </div>
      <div className="head_title">
        <div className="title_main hidden-down-md">
          Black Tool Box Laboratory
        </div>
        <div className="title_main hidden-up-md">
          BTB Lab.
        </div>
        <div className="title_sub">
          For React
        </div>
      </div>
      <div className="head_item">
        <FAI className="item_button" icon={['fas', 'home']} fixedWidth />
      </div>
      <div className="head_item">
        <FAI className="item_button" icon={['fas', 'globe']} fixedWidth />
      </div>
      <div className="head_item">
        <FAI className="item_button" icon={['fas', 'bars']} fixedWidth onClick={props.toggleMenu}/>
      </div>
    </header>
  );
};

export default Head;