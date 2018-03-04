import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FA from 'react-fontawesome';

import BTBMenu from 'blacktbox-menu';

import menuList from '../asset/menuList.js';
import routeList from '../asset/routeList.js';
import history from '../asset/history.js';

import About from './about.js';
import BTBATCS_index from './articles/index.js';
import BTBATCS_Flux_index from './articles/articleFluxNRedux/indexFlux.js';
import BTBATCS_Redux_index from './articles/articleFluxNRedux/indexRedux.js';
import BTBDemo_index from './blacktbox-demo/index.js';
import BTBList_basic from './blacktbox-list/basic.js';
import BTBTable_basic from './blacktbox-table/basic.js'
import BTBMenu_basic from './blacktbox-menu/basic.js';
import BTBMenu_advanced from './blacktbox-menu/advanced.js';
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
          window.scrollTo(0,0);
        };
      }
      break;
  }
}

class Home extends Component {
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
  constructor (props) {
    super(props);
    this.env = {
      menuActiveIndex: 'ABOUT'
    };
    history.push(routeList[this.env.menuActiveIndex]); // redirect to default page
    window.scrollTo(0,0);
  };
  componentWillMount () {
    SideContentThis = this;
  };
  componentWillReceiveProps (nextProps) {
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
      window.scrollTo(0,0);
    };
  };
};

class MainContent extends Component {
  render () {
    let content = [];
    content.push(
      <div className='mainContent'>
          <Switch>
            <Route exact path={routeList.ROOT} component={About}/>
            <Route exact path={routeList.ABOUT} component={About}/>

            <Route exact path={routeList.BTB_ATCS} component={BTBATCS_index}/>
            <Route exact path={routeList.BTB_ATCS_FLUX} component={BTBATCS_Flux_index}/>
            <Route exact path={routeList.BTB_ATCS_REDUX} component={BTBATCS_Redux_index}/>
            <Route exact path={routeList.BTB_DEMO} component={BTBDemo_index}/>
            <Route exact path={routeList.BTB_LIST_BASIC} component={BTBList_basic}/>
            <Route exact path={routeList.BTB_TABLE_BASIC} component={BTBTable_basic}/>
            <Route exact path={routeList.BTB_MENU_BASIC} component={BTBMenu_basic}/>
            <Route exact path={routeList.BTB_MENU_ADV} component={BTBMenu_advanced}/>

            <Route component={NotFound}/>
          </Switch>
      </div>
    );
    return content;
  };
};  

export default Home;