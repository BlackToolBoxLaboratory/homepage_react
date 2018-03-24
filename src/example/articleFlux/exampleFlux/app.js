import React, { Component } from 'react';

import ExampleComponent from './components/exampleComponent.js';

class App extends Component {
  render () {
    let content = [];
    content.push(
      <ExampleComponent/>
    );
    return content;
  };
};

export default App;
