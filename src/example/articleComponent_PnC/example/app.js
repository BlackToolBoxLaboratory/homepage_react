import React, { Component } from 'react';

import ServerAPI from './serverAPIs/serverAPI.js';
import ExampleComponent from './components/exampleComponent.js';

class App extends Component {
  constructor (props) {
    super(props);
  };
  componentWillMount () {
    ServerAPI.initData();
  };
  render () {
    let content = [];
    content.push(
      <ExampleComponent/>
    );
    return content;
  };
};

export default App;
