import React from 'react';

import ExampleComponent from './components/exampleComponent.js';

const App = (props) => {
  let content = [];
  content.push(
    <ExampleComponent/>
  );
  return content;
};

export default App;
