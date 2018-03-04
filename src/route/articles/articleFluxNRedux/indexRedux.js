import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from '../../../asset/routeList.js';
import history from '../../../asset/history.js';

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Redux intruduction</h1>
            <span>Conceptual Introduction and simple example</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>PREPARING</div>
          <div className='content'>
            <span>preparing</span>
          </div>
        </div>
        <div className='context'>
          <div className='buttonGroup'>
            <div className='backButton' onClick={()=>{this._redirectHandler('BTB_ATCS')}}>
              <FA name='arrow-left' fixedWidth />
              <span>Back to Articles</span>
            </div>
          </div>
        </div>
      </div>
    );
    return content;
  };

  _redirectHandler (index) {
    history.push(routeList[index]);
    window.scrollTo(0,0);
  };
};

export default Index;
