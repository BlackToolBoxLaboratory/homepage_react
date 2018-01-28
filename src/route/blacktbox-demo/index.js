import React, { Component } from 'react';
import FA from 'react-fontawesome';
import MD from 'react-markdown';

import {SideContent_backdoor} from '../home.js';

const SETUP_MD = `
## Environment
Firstly, you need [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com).
## Run
Now you can clone our code and run it by these commands:
\`\`\`
  git clone https://github.com/BlackToolBoxLaboratory/blacktbox-demo.git
  cd blacktbox-demo
  npm install
  npm start
\`\`\`
Then, welcome to [http://localhost:9000](http://localhost:9000).
`;

class Index extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  };
  render () {
      return (
          <div className='wrapper wrapper-basic'>
              <div className='context'>
                <div className='title'>ABOUT</div>
                <div className='content'>
                  {
                    `The Blacktbox-demo shows demonstrations for all the BTB Lab's libraries.`
                  }
                </div>
              </div>
              <div className='context'>
                <div className='title'>SETUP</div>
                <div className='content'>
                  <MD className='content-MD' source={SETUP_MD} />
                </div>
              </div>
              <div className='context'>
                <div className='title'>BLB PACKAGE LIST</div>
                <div className='content'>
                  {
                    `This is the list of BLB Lab's API demonstrated here.`
                  }
                </div>
                <ul>
                  <li>Blacktbox-menu <FA className='linkBtn' onClick={()=>{this._redirectHandler('BTB_MENU_BASIC')}} name='link' fixedWidth/></li>
                </ul>
              </div>
              <div className='context'>
                <div className='title'>CONTACT ME</div>
                <ul>
                    <li>
                      <FA name='envelope-o' fixedWidth/>
                      <span style={{'margin-left':'5px'}}>E-mail:</span>
                      <span style={{'margin-left':'5px'}}>
                        <a target='_blank' href='mailto://vannoel0628@gmail.com'>
                          {
                            `vannoel0628@gmail.com`
                          }
                        </a>
                      </span>
                    </li>
                    <li>
                      <FA name='github' fixedWidth/>
                      <span style={{'margin-left':'5px'}}>GitHub:</span>
                      <span style={{'margin-left':'5px'}}>
                        <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo'>
                          {
                            `blacktbox-demo`
                          }
                        </a>
                      </span>
                    </li>
                  </ul>
              </div>
          </div>
      );
  };

  _redirectHandler (index) {
    let obj = {
      acticveIndex: index
    }
    SideContent_backdoor ('menuRedirect', obj);
  };
};

export default Index;
