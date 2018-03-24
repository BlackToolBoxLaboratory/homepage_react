import React from 'react';

/* container */
import UserList from '../containers/exampleContainer.js';

const App = () => {
  let content = [];
  content.push(
    <div className='example-wrapper example-userList'>
      <div className='example-part'>
        <h3>Example - PnC</h3>
      </div>
      <UserList />
    </div>
  );
  return content;
};

export default App;
