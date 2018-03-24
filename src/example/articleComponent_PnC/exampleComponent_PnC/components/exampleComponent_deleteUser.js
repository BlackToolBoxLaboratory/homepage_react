import React from 'react';
import FA from 'react-fontawesome';

import ServerAPI from '../serverAPIs/serverAPI.js';

const DeleteUser = (props) => {
  const _deleteHandler = () => {
    let obj = {
      'uId': props.userId
    };
    ServerAPI.deleteData(obj);
    props.refreshHandler();
  };
  let content = [];
  content.push(
    <div className='userList-deleteButton' onClick={_deleteHandler}><FA name='trash' fixedWidth/></div>
  );
  return content;
};

export default DeleteUser;
