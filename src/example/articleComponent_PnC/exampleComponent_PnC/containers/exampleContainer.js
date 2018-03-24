import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import ServerAPI from '../serverAPIs/serverAPI.js';

import AddUser from '../components/exampleComponent_addUser.js';
import DeleteUser from '../components/exampleComponent_deleteUser.js';

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
    content.push(
      <div className='example-part'>
        <AddUser 
          dataCounter={this.dataList.length}
          dataLimit={DATAMEMBERS}
          refreshHandler={()=>{this._refreshHandler();}}
        />
        <ul className='userList-list'>
        {
          this.dataList.map((entry)=>{
            let content_datalist_tr = [];
            content_datalist_tr.push(
              <li className='userList-entry'>
                <div className='userList-info'>{entry['name'].substring(0, 1).toUpperCase() + entry['name'].substring(1)}</div>
                <DeleteUser 
                  userId={entry['uId']}
                  refreshHandler={()=>{this._refreshHandler();}}
                />
              </li>
            );
            return content_datalist_tr;
          })
        }
        </ul>
      </div>
    );
    return content;
  };

  fetchData () {
    // fetch data and used by container
    this.dataList = ServerAPI.getData();
    this.forceUpdate();
  };

  _refreshHandler() {
    this.fetchData();
  };
};

export default App;
