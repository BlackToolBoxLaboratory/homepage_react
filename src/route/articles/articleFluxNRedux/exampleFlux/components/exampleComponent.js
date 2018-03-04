import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import ExampleAction from '../actions/exampleAction.js';
import ExampleDispatcher from '../dispatchers/exampleDispatcher.js';
import ExampleStore from '../stores/exampleStore.js';

// Definitions
function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};
const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyz';

var ExampleThis;

class Example extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  componentDidMount () {
    ExampleThis = this;
    ExampleStore.addChangeListener(this.refresh);
    this.fetchData();
  };
  componentWillUnmount () {
    ExampleStore.removeChangeListener(this.refresh);
  };
  render  () {
    let content = [];
    content.push(
      <div className='example-wrapper example-userList'>
        <div className='example-part'>
          <h3>Example - Flux</h3>
        </div>
        <div className='example-part'>
          <input className='userList-input' type='text' maxLength='10' ref='userName' placeholder='Enter 1-10 character(s).'/>
          <button className='userList-add' onClick={()=>{this._addHandler()}}><FA name='plus-square' fixedWidth/></button>
        </div>
        <div className='example-part'>
          <ul className='userList-list'>
          {
            this.dataList.map((entry)=>{
              let content_datalist_tr = [];
              content_datalist_tr.push(
                <li className='userList-entry'>
                  <div className='userList-info'>{entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)}</div>
                  <div className='userList-actionButton' onClick={()=>{this._deleteHandler(entry['uId'])}}><FA name='trash' fixedWidth/></div>
                </li>
              );
              return content_datalist_tr;
            })
          }
          </ul>
        </div>
      </div>
    );
    return content;
  };

  refresh () {
    ExampleThis.dataList = ExampleStore.getData();
    ExampleThis.forceUpdate();
  };
  fetchData() {
    // random data instead of fetch server
    let resData = [];
    let dataTemp;
    for (let i=0; i<DATAMEMBERS; i++)
    {
      dataTemp = new DataObj();
      dataTemp['uId'] = this.randomData('id', this.dataList);
      dataTemp['name'] = this.randomData('name');
      resData.push(dataTemp);
    };
    ExampleAction.fetch(resData);
  };
  randomData (type, base) {
    let valueLength = 0; 
    let value = '';
    let randomNumber;
    switch(type)
    {
      case 'id':
        valueLength = 10;
        for (let idIndex=0; idIndex<valueLength; idIndex++)
        {
          randomNumber = Math.round(Math.random()*100);
          value += random_uId.split('')[randomNumber%random_uId.length];
        }
        for (let baseIndex=0; baseIndex<baseIndex.length; baseIndex++)
        {
          if(baseIndex[baseIndex].uId == value)
          { // duplicate uId, and random again
            value = this.randomData('id', this.dataList);
            break;
          }
        }
        break;
      case 'name':
        valueLength = Math.ceil(Math.random()*10);
        for (let idIndex=0; idIndex<valueLength; idIndex++)
        {
          randomNumber = Math.round(Math.random()*100);
          value += random_name.split('')[randomNumber%random_name.length];
        }
        break;
    }
    return value;
  };

  _addHandler () {
    let newUser = ReactDOM.findDOMNode(this.refs['userName']).value.trim();
    ExampleAction.add(newUser);
    ReactDOM.findDOMNode(this.refs['userName']).value = '';
  };
  _deleteHandler (uId) {
    ExampleAction.remove(uId);
  };
};

export default Example;
