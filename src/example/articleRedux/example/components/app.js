import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import EL from 'components/exampleLayout.js';

// definitions
function DataObj () {
  this['uId'] = '';
  this['name'] = '';
}
const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyz';

class App extends Component {
  constructor (props) {
    super(props);
    this.dataList = {
      'left'  : new Array(),
      'right' : new Array()
    };
  }
  componentDidMount () {
    this.fetchData();
  }
  render () {
    let content = [];
    content.push(
      <EL.Wrapper className='example-userList'>
        <EL.Part><EL.Title>Example</EL.Title></EL.Part>
        <EL.Part>
          <EL.Block>
            <div className='userList-add'>
              <input className='userList-input' type='text' maxLength='10' ref='userName' placeholder='Enter 1-10 character(s).'/>
            </div>
          </EL.Block>
          <EL.InlineBlock>
            <div className='userList-add'>
              <button className='userList-addButton' onClick={() => {this._addHandler('left');}} style={{'vertical-align' : 'bottom'}}><span>Left</span><FA icon={['fas', 'plus-square']} fixedWidth/></button>
            </div>
          </EL.InlineBlock>
          <EL.InlineBlock>
            <div className='userList-add'>
              <button className='userList-addButton' onClick={() => {this._addHandler('right');}} style={{'vertical-align' : 'bottom'}}><span>Right</span><FA icon={['fas', 'plus-square']} fixedWidth/></button>
            </div>
          </EL.InlineBlock>
        </EL.Part>
        <EL.Part>
          <EL.InlineBlock>
            <ul className='userList-list'>
              {
                (0 < this.dataList.left.length)?
                  this.dataList.left.map((entry) => {
                    let content_datalist_tr = [];
                    content_datalist_tr.push(
                      <li className='userList-entry'>
                        <div className='userList-info'>{entry['name']}</div>
                        <div className='userList-moveButton' onClick={() => {this._moveHandler('right', entry['uId']);}}><FA icon={['fas', 'caret-square-right']} fixedWidth/></div>
                        <div className='userList-deleteButton' onClick={() => {this._deleteHandler('left', entry['uId']);}}><FA icon={['fas', 'trash-alt']} fixedWidth/></div>
                      </li>
                    );
                    return content_datalist_tr;
                  })
                  : (<li className='userList-entry-empty'>No data available.</li>)
              }
            </ul>
          </EL.InlineBlock>
          <EL.InlineBlock>
            <ul className='userList-list'>
              {
                (0 < this.dataList.right.length)?
                  this.dataList.right.map((entry) => {
                    let content_datalist_tr = [];
                    content_datalist_tr.push(
                      <li className='userList-entry'>
                        <div className='userList-info'>{entry['name']}</div>
                        <div className='userList-moveButton' onClick={() => {this._moveHandler('left', entry['uId']);}}><FA icon={['fas', 'caret-square-left']} fixedWidth/></div>
                        <div className='userList-deleteButton' onClick={() => {this._deleteHandler('right', entry['uId']);}}><FA icon={['fas', 'trash-alt']} fixedWidth/></div>
                      </li>
                    );
                    return content_datalist_tr;
                  })
                  : (<li className='userList-entry-empty'>No data available.</li>)
              }
            </ul>
          </EL.InlineBlock>
        </EL.Part>
      </EL.Wrapper>
    );
    return content;
  }

  fetchData () {
    // random data instead of 'fetch' data
    this.dataList = {
      'left'  : [],
      'right' : []
    };
    let dataTemp;
    for (let i=0; i<DATAMEMBERS; i++)
    {
      dataTemp = new DataObj();
      dataTemp['uId'] = this.randomData('id', this.dataList.left);
      dataTemp['name'] = this.randomData('name');
      this.dataList.left.push(dataTemp);
      dataTemp = new DataObj();
      dataTemp['uId'] = this.randomData('id', this.dataList.right);
      dataTemp['name'] = this.randomData('name');
      this.dataList.right.push(dataTemp);
    }
    this.forceUpdate();
  }
  randomData (type, base) {
    let valueLength = 0; 
    let value = '';
    let randomNumber;
    switch (type)
    {
    case 'id':
      valueLength = 10;
      for (let idIndex=0; idIndex<valueLength; idIndex++)
      {
        randomNumber = Math.floor(Math.random()*random_uId.length);
        value += random_uId.slice(randomNumber, randomNumber+1);
      }
      for (let baseIndex=0; baseIndex<base.length; baseIndex++)
      {
        if (base[baseIndex].uId == value)
        { // if duplicate uId, random again
          value = this.randomData('id', base);
          break;
        }
      }
      break;
    case 'name':
      valueLength = Math.ceil(Math.random()*10);
      for (let idIndex=0; idIndex<valueLength; idIndex++)
      {
        randomNumber = Math.floor(Math.random()*random_name.length);
        value += random_name.slice(randomNumber, randomNumber+1);
      }
      break;
    }
    return value;
  }

  _addHandler (part) {
    if (DATAMEMBERS <= this.dataList[part].length)
    {
      alert(('left' == part)? 'Left user is full.' : 'Right user is full.');
      return;
    }
    let name = ReactDOM.findDOMNode(this.refs['userName']).value.trim();
    if ('' == name)
    {
      alert('Input is empty.');
      return;
    }
    let dataTemp = new DataObj();
    dataTemp['uId'] = this.randomData('id', this.dataList[part]);
    dataTemp['name'] = name;
    this.dataList[part].push(dataTemp);
    ReactDOM.findDOMNode(this.refs['userName']).value = '';
    this.forceUpdate();
  }
  _moveHandler (moveTo, uId) {
    let moveFrom = ('left' == moveTo)? 'right': 'left';
    if (DATAMEMBERS <= this.dataList[moveTo].length)
    {
      alert(('left' == moveTo)? 'Left user is full.' : 'Right user is full.');
      return;
    }
    let data = {};
    for (let i=0; i<this.dataList[moveFrom].length; i++)
    {
      if (uId == this.dataList[moveFrom][i].uId)
      {
        data = this.dataList[moveFrom].splice(i, 1);
        for (let baseIndex=0; baseIndex<this.dataList[moveTo].length; baseIndex++)
        {
          if (this.dataList[moveTo][baseIndex].uId == data['value'])
          { // if duplicate uId, random again
            data['value'] = this.randomData('id', this.dataList[moveTo]);
            break;
          }
        }
        this.dataList[moveTo] = this.dataList[moveTo].concat(data);
        break;
      }
    }
    this.forceUpdate();
  }
  _deleteHandler (part, uId) {
    for (let i=0; i<this.dataList[part].length; i++)
    {
      if (uId == this.dataList[part][i].uId)
      {
        this.dataList[part].splice(i, 1);
        break;
      }
    }
    this.forceUpdate();
  }
}

export default App;
