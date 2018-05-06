import React, { Component } from 'react';

import App from './components/app.js';

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <App/>
    );
    return content;
  };
};

export default Index;
