import React, { Component } from 'react';
import FA from 'react-fontawesome';

import {SideContent_backdoor} from '../home.js';

const SETUP_PRE = 
`git clone https://github.com/BlackToolBoxLaboratory/blacktbox-demo.git
cd blacktbox-demo
npm install
npm start
`;
const LibraryList = new Array(
  {name: 'Blacktbox-list',  link: 'BTB_LIST_BASIC'},
  {name: 'Blacktbox-table', link: 'BTB_TABLE_BASIC'},
  {name: 'Blacktbox-menu',  link: 'BTB_MENU_BASIC'}
);

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Blacktbox-demo 
              <a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo'><FA name='github' fixedWidth/></a>
            </h1>
            <span>The Blacktbox-demo shows demonstrations for all the BTB Lab's tools.</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>SETUP</div>
          <div className='content'>
            <span>Firstly, you need <a target='_blank' href='https://nodejs.org/en/'>{`Node.js`}<FA name='external-link' fixedWidth/></a> and <a target='_blank' href='https://www.npmjs.com'>{`NPM`}<FA name='external-link' fixedWidth/></a>. And then you can clone our code and run it by these commands:</span>
            <pre className='content-pre'>{SETUP_PRE}</pre>
            <span>Welcome to <a target='_blank' href='http://localhost:9000'>{`http://localhost:9000`}<FA name='external-link' fixedWidth/></a>.</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>BLB LIBRARY LIST</div>
          <div className='content'>
            <span>This is the list of BLB Lab's API demonstrated here.</span>
          </div>
          <ul>
          {
            LibraryList.map((entry)=>{
              let content_li = [];
              content_li.push(
                <li>{entry.name}<FA className='linkBtn' onClick={()=>{this._redirectHandler(entry.link)}} name='link' fixedWidth/></li>
              )
              return content_li;
            })
          }
          </ul>
        </div>
      </div>
    );
    return content;
  };

  _redirectHandler (index) {
    let obj = {
      acticveIndex: index
    }
    SideContent_backdoor ('menuRedirect', obj);
  };
};

export default Index;
