import React from 'react';
import FA from 'react-fontawesome';

const DATAMEMBERS = 5;

function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};

const UserAdder = ({ data, handler }) => {
  let content = [];
  let formList = {};
  content.push(
    <div className='userList-add'>
      <input className='userList-input' type='text' maxLength='10' ref={(node) => {formList['userName'] = node}} placeholder='Enter 1-10 character(s).'/>
    </div>
  );
  content.push(
    <div className='example-block'>
      <div className='example-title'>
        <div className='userList-add'>
          <button className='userList-addButton' onClick={()=>{addUserLeftHandler()}} style={{'vertical-align': 'bottom'}}><span>Left</span><FA name='plus-square' fixedWidth/></button>
        </div>
      </div>
    </div>
  );
  content.push(
    <div className='example-block'>
      <div className='example-title'>
        <div className='userList-add'>
          <button className='userList-addButton' onClick={()=>{addUserRightHandler()}} style={{'vertical-align': 'bottom'}}><span>Right</span><FA name='plus-square' fixedWidth/></button>
        </div>
      </div>
    </div>
  );

  function addUserLeftHandler ()
  {
    let name = formList['userName'].value.trim();
    if('' == name)
    {
      alert('Input is empty.');
      return;
    };
    if(DATAMEMBERS <= data['leftList'].length)
    {
      alert('Left user is full.');
      return false;
    };
    let dataTemp = new DataObj();
    dataTemp['uId'] = '';
    dataTemp['name'] = name;
    handler._addUserLeftHandler(dataTemp);
  };
  function addUserRightHandler ()
  {
    let name = formList['userName'].value.trim();
    if('' == name)
    {
      alert('Input is empty.');
      return;
    };
    if(DATAMEMBERS <= data['rightList'].length)
    {
      alert('Right user is full.');
      return false;
    };
    let dataTemp = new DataObj();
    dataTemp['uId'] = '';
    dataTemp['name'] = name;
    handler._addUserRightHandler(dataTemp);
  };

  return content;
};

export default UserAdder;
