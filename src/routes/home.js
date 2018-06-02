import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FA from 'react-fontawesome';

import BTBMenu from 'blacktbox-menu';

import menuList from 'assets/menuList.js';
import routeList from 'assets/routeList.js';
import hashHistory from 'assets/history.js';

import About from './about.js';
import BTBATCS_index from './articles/index.js';
import BTBATCS_Flux from './articles/Flux.js';
import BTBATCS_Redux from './articles/Redux.js';
import BTBDemo_index from './blacktbox-demo/index.js';
import BTBList_basic from './blacktbox-list/basic.js';
import BTBList_example from './blacktbox-list/example.js';
import BTBTable_basic from './blacktbox-table/basic.js'
import BTBMenu_basic from './blacktbox-menu/basic.js';
import BTBMenu_example from './blacktbox-menu/example.js';
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
          hashHistory.push(path);
          window.scrollTo(0,0);
        };
      }
      break;
  }
}

const Home = (props) => {
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

class SideContent extends Component {
  constructor (props) {
    super(props);
    this.env = {
      menuActiveIndex: 'ABOUT'
    };
  };
  componentDidMount () {
    let currentPathname = hashHistory.location.pathname;
    for (let routeIndex in routeList)
    {
      if (routeList[routeIndex] == currentPathname)
      {
        if ('ROOT' == routeIndex)
        {
          this.env.menuActiveIndex = 'ABOUT';
        }
        else
        {
          this.env.menuActiveIndex = routeIndex;
        }
        window.scrollTo(0,0);
        this.forceUpdate();
        break;
      };
      if ('BTB_ATCS' == routeIndex)
      {
        if(currentPathname.match(routeList[routeIndex]))
        {
          this.env.menuActiveIndex = routeIndex;
          window.scrollTo(0,0);
          this.forceUpdate();
          break;
        };
      };
    };
    SideContentThis = this;
  };
  componentDidUpdate () {
    SideContentThis = this;
  };  
  render () {
    let content = [];
    content.push(
      <div className='sideContent'>
        <div className='header'>
          <div className='groupname'>BTB Laboratory</div>
          <div className='icon'><FA name='user-circle-o' fixedWidth/></div>
          <div className='welcome'>Hello! Friend.</div>
        </div>
        <BTBMenu 
          className='menu' 
          menuArr={menuList} 
          acticveIndex={this.env.menuActiveIndex} 
          itemOnClickFn={(infoObj)=>{this._itemOnClickFn(infoObj);}}
          featureCollapsible={{
            'enable': true,
            'itemClickWithCollapseEnable': true
          }}
        />
      </div>
    );
    return content;
  };

  _itemOnClickFn (infoObj) {
    this.env.menuActiveIndex = infoObj.index;
    let path = routeList[infoObj.index];
    if(path)
    {
      hashHistory.push(path);
      window.scrollTo(0,0);
    };
  };
};

const MainContent = (props) => {
  let content = [];
  content.push(
    <div className='mainContent'>
      <Switch>
        <Route exact path={routeList.ROOT} component={About}/>
        <Route exact path={routeList.ABOUT} component={About}/>

        <Route exact path={routeList.BTB_ATCS} component={BTBATCS_index}/>
        <Route exact path={routeList.BTB_ATCS_FLUX} component={BTBATCS_Flux}/>
        <Route exact path={routeList.BTB_ATCS_REDUX} component={BTBATCS_Redux}/>
        <Route exact path={routeList.BTB_DEMO} component={BTBDemo_index}/>
        <Route exact path={routeList.BTB_LIST_BASIC} component={BTBList_basic}/>
        <Route exact path={routeList.BTB_LIST_EXAMPLE} component={BTBList_example}/>
        <Route exact path={routeList.BTB_TABLE_BASIC} component={BTBTable_basic}/>
        <Route exact path={routeList.BTB_MENU_BASIC} component={BTBMenu_basic}/>
        <Route exact path={routeList.BTB_MENU_EXAMPLE} component={BTBMenu_example}/>
        <Route exact path={routeList.BTB_MENU_ADV} component={BTBMenu_advanced}/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
  return content;
};

export default Home;
