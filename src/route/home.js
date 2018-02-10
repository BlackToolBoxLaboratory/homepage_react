import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FA from 'react-fontawesome';

import BTBMenu from 'blacktbox-menu';

import menuList from '../asset/menuList.js';
import routeList from '../asset/routeList.js';
import history from '../asset/history.js';

import About from './about.js';
import BTBDemo_index from './blacktbox-demo/index.js';
import BTBList_basic from './blacktbox-list/basic.js';
import BTBTable_basic from './blacktbox-table/basic.js'
import BTBMenu_basic from './blacktbox-menu/basic.js';
import NotFound from './404.js';

let SideContentThis;

export function SideContent_backdoor (type, obj) {
  switch(type)
  {
    case 'menuRedirect':
      if(obj.acticveIndex)
      {
        SideContentThis.env.menuActiveIndex = obj.acticveIndex;
        let path = routeList[obj.acticveIndex];
        if(path)
        {
          history.push(path);
        };
      }
      break;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-home'>
        <div className='sideContentBG' />
        <SideContent />
        <MainContent />
      </div>
    );
    return content;
  };
};

class SideContent extends Component {
  constructor(props) {
    super(props);
    this.env = {
      menuActiveIndex: 'ABOUT'
    };
  };
  componentWillMount () {
    SideContentThis = this;
  };
  componentWillReceiveProps(nextProps) {
    SideContentThis = this;
  };  
  render () {
    let content = [];
    content.push(
      <div className='sideContent'>
        {this.header()}
        <BTBMenu 
          className='menu' 
          menuArr={menuList} 
          acticveIndex={this.env.menuActiveIndex} 
          itemOnClickFn={(infoObj)=>{this._itemOnClickFn(infoObj);}}
          featureCollapsible={{
            enable: true
          }}
        />
      </div>
    );
    return content;
  };

  header () {
    let content = [];
    let groupname = 'BTB Laboratory';
    let welcome = 'Hello! Friend.';
    content.push(
      <div className='header'>
        <div className='groupname'>{groupname}</div>
        <div className='icon'><FA name='user-circle-o' fixedWidth/></div>
        <div className='welcome'>{welcome}</div>
      </div>
    );
    return content;
  };

  _itemOnClickFn (infoObj) {
    this.env.menuActiveIndex = infoObj.index;
    let path = routeList[infoObj.index];
    if(path)
    {
      history.push(path);
    }
  };
};

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render () {
    let content = [];
    content.push(
      <div className='mainContent'>
          <Switch>
            <Route exact path='/' component={About}/>
            <Route exact path='/about' component={About}/>

            <Route exact path='/blacktbox-demo' component={BTBDemo_index}/>
            <Route exact path='/blacktbox-list/basic' component={BTBList_basic}/>
            <Route exact path='/blacktbox-table/basic' component={BTBTable_basic}/>
            <Route exact path='/blacktbox-menu/basic' component={BTBMenu_basic}/>

            <Route path='*' component={NotFound}/>
          </Switch>
      </div>
    );
    return content;
  };
};  

export default Home;
