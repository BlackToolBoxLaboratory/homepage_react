import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

// definitions
function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};
const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyz';

class Example extends Component {
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
    // random data instead of 'fetch' data
    this.dataList = [];
    let dataTemp;
    for (let i=0; i<DATAMEMBERS; i++)
    {
      dataTemp = new DataObj();
      dataTemp['uId'] = this.randomData('id', this.dataList);
      dataTemp['name'] = this.randomData('name');
      this.dataList.push(dataTemp);
    };
    this.forceUpdate();
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
          randomNumber = Math.floor(Math.random()*random_uId.length);
          value += random_uId.split('')[randomNumber];
        };
        for (let baseIndex=0; baseIndex<base.length; baseIndex++)
        {
          if(base[baseIndex].uId == value)
          { // if duplicate uId, random again
            value = this.randomData('id', base);
            break;
          }
        };
        break;
      case 'name':
        valueLength = Math.ceil(Math.random()*10);
        for (let idIndex=0; idIndex<valueLength; idIndex++)
        {
          randomNumber = Math.floor(Math.random()*random_name.length);
          value += random_name.split('')[randomNumber];
        };
        break;
    };
    return value;
  };

  _addHandler () {
    let name = ReactDOM.findDOMNode(this.refs['userName']).value.trim();
    if('' == name)
    {
      alert('Input is empty.');
      return;
    };
    if(DATAMEMBERS <= this.dataList.length)
    {
      alert('User is full.');
      return;
    };
    let dataTemp = new DataObj();
    dataTemp['uId'] = this.randomData('id', this.dataList);
    dataTemp['name'] = name;
    this.dataList.push(dataTemp);
    ReactDOM.findDOMNode(this.refs['userName']).value = '';
    this.forceUpdate();
  };
  _deleteHandler (uId) {
    for(let i=0; i<this.dataList.length; i++)
    {
      if(uId == this.dataList[i].uId)
      {
        this.dataList.splice(i,1);
        break;
      };
    };
    this.forceUpdate();
  };
};

export default Example;
