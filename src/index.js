import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import 'css/index.less';
import 'components/fontawesomeLibrary.js';
// import Dispatcher from 'assets/dispatcher.js';

import Home from 'routes/home.js';

const Index = () => {
  let content = [];
  content.push(
    <HashRouter>
      <Route path='/' component={Home} />
    </HashRouter>
  );
  return content;
};

render((<Index />), document.getElementById('main'));
