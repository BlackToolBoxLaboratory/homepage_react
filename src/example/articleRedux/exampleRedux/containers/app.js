import React from 'react';
import { connect } from 'react-redux';

import leftListAction from '../actions/leftListAction.js';
import rightListAction from '../actions/rightListAction.js';
import UserAdder from './userAdder.js';
import UserListLeft from './userListLeft.js';
import UserListRight from './userListRight.js';

const App = ({ dispatch }) => {
  let content = [];
  dispatch(leftListAction.init());
  dispatch(rightListAction.init());
  content.push(
    <div className='example-wrapper example-userList'>
      <div className='example-part'>
        <div className='example-headerTitle'>Example - Redux</div>
      </div>
      <div className='example-part'>
        <UserAdder />
      </div>
      <div className='example-part'>
        <div className='example-block'>
          <UserListLeft />
        </div>
        <div className='example-block'>
          <UserListRight />
        </div>
      </div>
    </div>
  );
  return content;
};

export default connect()(App);
