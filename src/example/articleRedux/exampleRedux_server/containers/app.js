import React from 'react';
import { connect } from 'react-redux';

import EL from 'components/exampleLayout.js';

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
    <EL.Wrapper className='example-userList'>
      <EL.Part><EL.Title>Example - Redux with server</EL.Title></EL.Part>
      <EL.Part><UserAdder /></EL.Part>
      <EL.Part>
        <EL.InlineBlock><UserListLeft /></EL.InlineBlock>
        <EL.InlineBlock> <UserListRight /></EL.InlineBlock>
      </EL.Part>
    </EL.Wrapper>
  );
  return content;
};

export default connect()(App);
