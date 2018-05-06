import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import ELayout from 'components/exampleLayout.js';

import ServerAPI from '../serverAPIs/serverAPI.js';

/* In our webside we import it in first time at index.js */
// import Dispatcher from '../../../../assets/dispatcher.js';
import ExampleAction from '../actions/action.js';
import ExampleStore from '../stores/store.js';

/* Definitions */
const DATAMEMBERS = 5;

var ExampleThis;

class Example extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  componentDidMount () {
    ExampleThis = this;
    ExampleStore.exampleFlux_server_addChangeListener(this.refresh);
    this.fetchData();
  };
  componentWillUnmount () {
    ExampleStore.exampleFlux_server_removeChangeListener(this.refresh);
  };
  render  () {
    let content = [];
    content.push(
      <ELayout.Wrapper className='example-userList'>
        <ELayout.Part><ELayout.Title>Example - Flux with server</ELayout.Title></ELayout.Part>
        <ELayout.Part>
          <ELayout.Block>
            <div className='userList-add'>
              <input className='userList-input' type='text' maxLength='10' ref='userName' placeholder='Enter 1-10 character(s).'/>
              <button className='userList-addButton' onClick={()=>{this._addHandler()}}><FA name='plus-square' fixedWidth/></button>
            </div>
          </ELayout.Block>
          <ELayout.Block>
            <ul className='userList-list'>
            {
              (0 < this.dataList.length)?
              this.dataList.map((entry)=>{
                let content_datalist_tr = [];
                content_datalist_tr.push(
                  <li className='userList-entry'>
                    <div className='userList-info'>{entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)}</div>
                    <div className='userList-deleteButton' onClick={()=>{this._deleteHandler(entry['ID'])}}><FA name='trash' fixedWidth/></div>
                  </li>
                );
                return content_datalist_tr;
              })
              : (<li className='userList-entry'>No data available.</li>)
            }
            </ul>
          </ELayout.Block>
        </ELayout.Part>
      </ELayout.Wrapper>
    );
    return content;
  };

  refresh () {
    ExampleThis.dataList = ExampleStore.exampleFlux_server_getData();
    ExampleThis.forceUpdate();
  };
  fetchData() {
    ExampleAction.fetch();
  };

  _addHandler () {
    let newUser = ReactDOM.findDOMNode(this.refs['userName']).value.trim();
    if('' == newUser)
    {
      alert('Input is empty.');
      return;
    };
    if(DATAMEMBERS <= this.dataList.length)
    {
      alert('User is full.');
      return;
    };
    ReactDOM.findDOMNode(this.refs['userName']).value = '';
    ExampleAction.add(newUser);
  };
  _deleteHandler (deleteID) {
    ExampleAction.remove(deleteID);
  };
};

export default Example;
