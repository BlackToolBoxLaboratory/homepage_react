import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import ServerAPI from '../serverAPIs/serverAPI.js';

class AddUser extends Component {
  constructor (props) {
    super(props);
    this.env = {
      'dataCounter': 0,
      'dataLimit': 0,
      'refreshHandler': function(){}
    };
  };
  componentWillUpdate (nextProps, nextState) {
    this.updateData(nextProps);
  };
  render () {
    let content = [];
    content.push(
      <div className='userList-add'>
        <input className='userList-input' type='text' maxLength='10' ref='userName' placeholder='Enter 1-10 character(s).'/>
        <button className='userList-addButton' onClick={()=>{this._addHandler()}}><FA name='plus-square' fixedWidth/></button>
      </div>
    );
    return content;
  };

  updateData (props) {
    this.env['dataCounter'] = (props.dataCounter)? props.dataCounter:0;
    this.env['dataLimit'] = (props.dataLimit)? props.dataLimit:0;
    this.env['refreshHandler'] = (props.refreshHandler)? props.refreshHandler:function(){};
  };

  _addHandler () {
    if(this.env['dataLimit'] <= this.env['dataCounter'])
    {
      alert('User is full.');
      return;
    };
    let obj = {
      'name': ReactDOM.findDOMNode(this.refs['userName']).value.trim()
    };
    if('' == obj['name'])
    {
      alert('Input is empty.');
      return;
    };
    this.dataList = ServerAPI.addData(obj);
    ReactDOM.findDOMNode(this.refs['userName']).value = '';
    this.env.refreshHandler();
  };
};

export default AddUser;
