import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Dispatcher from 'assets/dispatcher.js';

import 'css/index.less';
import Home from 'routes/home.js';

const Index = (props) => {
  let content = [];
  content.push(
    <HashRouter>
      <Route path='/' component={Home} />
    </HashRouter>
  );
  return content;
};

render((<Index />), document.getElementById('main'));
