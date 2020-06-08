import React, { useState } from 'react';
import classnames from 'classnames';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Aside from './Aside.jsx';

import CONST from '@src/assets/definitions/const.js';

const Layout = (props) => {
  const env = {
    state_hiddenMenu : useMenuState(false)
  };
  
  function _clickEntry () {
    if (window.innerWidth < CONST.GRID_MD) {
      env.state_hiddenMenu.onToggle(true);
    }
  }
  function _toggleMenu() {
    env.state_hiddenMenu.onToggle();
  }

  return (
    <div className="btb-layout">
      <Head className="layout_head" toggleMenu={_toggleMenu}/>
      <div className="layout_content">
        {props.children}
      </div>
      <Foot className="layout_foot"/>
      <Aside className={classnames('layout_aside', { 'aside-hidden' : env.state_hiddenMenu.value})} clickEntry={_clickEntry}/>
    </div>
  );
};

function useMenuState (defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onToggle : (bol) => {
      setState((typeof bol != 'undefined')? bol : !value);
    }
  };
}

export default Layout;