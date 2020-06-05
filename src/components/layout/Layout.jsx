import React from 'react';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Aside from './Aside.jsx';

const Layout = (props) => {
  return (
    <div className="btb-layout">
      <Head className="layout_head"/>
      <div className="layout_content">
        {props.children}
      </div>
      <Foot className="layout_foot"/>
      <Aside className="layout_aside"/>
    </div>
  );
};

export default Layout;