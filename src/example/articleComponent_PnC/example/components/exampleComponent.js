import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import ServerAPI from '../serverAPIs/serverAPI.js';

function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};
const DATAMEMBERS = 5;

class App extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  componentDidMount () {
    this.fetchData();
  };
  render () {
    let content = [];
    // presentational
    content.push(
      <div className='example-wrapper example-userList'>
        <div className='example-part'>
          <div className='example-headerTitle'>Example</div>
        </div>
        <div className='example-part'>
          <div className='userList-add'>
            <input className='userList-input' type='text' maxLength='10' ref='userName' placeholder='Enter 1-10 character(s).'/>
            <button className='userList-addButton' onClick={()=>{this._addHandler()}}><FA name='plus-square' fixedWidth/></button>
          </div>
          <ul className='userList-list'>
          {
            (0 < this.dataList.length)?
            this.dataList.map((entry)=>{
              // container
              let content_datalist_tr = [];
              content_datalist_tr.push(
                <li className='userList-entry'>
                  <div className='userList-info'>{entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)}</div>
                  <div className='userList-deleteButton' onClick={()=>{this._deleteHandler(entry['uId'])}}><FA name='trash' fixedWidth/></div>
                </li>
              );
              return content_datalist_tr;
            })
            : (<li className='userList-entry'>No data available.</li>)
          }
          </ul>
        </div>
      </div>
    );
    return content;
  };

  fetchData () {
    // fetch data and used by container
    this.dataList = ServerAPI.getData();
    this.forceUpdate();
  };

  _addHandler () {
    let obj = new DataObj();
    obj['name'] = ReactDOM.findDOMNode(this.refs['userName']).value.trim();
    if('' == obj['name'])
    {
      alert('Input is empty.');
      return;
    };
    if(DATAMEMBERS <= this.dataList.length)
    {
      alert('User is full.');
      return;
    };
    this.dataList = ServerAPI.addData(obj);
    ReactDOM.findDOMNode(this.refs['userName']).value = '';
    this.forceUpdate();
  };
  _deleteHandler (uId) {
    let obj = new DataObj();
    obj['uId'] = uId;
    this.dataList = ServerAPI.deleteData(obj);
    this.forceUpdate();
  };
};

export default App;
