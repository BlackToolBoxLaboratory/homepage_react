import React from 'react';

/* container */
import UserList from '../containers/exampleContainer.js';

const App = () => {
  let content = [];
  content.push(
    <div className='example-wrapper example-userList'>
      <div className='example-part'>
        <div className='example-headerTitle'>Example - PnC</div>
      </div>
      <UserList />
    </div>
  );
  return content;
};

export default App;
