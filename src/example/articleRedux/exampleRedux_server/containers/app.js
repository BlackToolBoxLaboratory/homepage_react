import React from 'react';
import { connect } from 'react-redux';

import ELayout from 'components/exampleLayout.js';

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
    <ELayout.Wrapper className='example-userList'>
      <ELayout.Part><ELayout.Title>Example - Redux with server</ELayout.Title></ELayout.Part>
      <ELayout.Part><UserAdder /></ELayout.Part>
      <ELayout.Part>
        <ELayout.InlineBlock><UserListLeft /></ELayout.InlineBlock>
        <ELayout.InlineBlock> <UserListRight /></ELayout.InlineBlock>
      </ELayout.Part>
    </ELayout.Wrapper>
  );
  return content;
};

export default connect()(App);
