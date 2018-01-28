import React, { Component } from 'react';
import FA from 'react-fontawesome';
import MD from 'react-markdown';

import {SideContent_backdoor} from '../home.js';

const INSTALLATION_MD = `
Using with [NPM](https://www.npmjs.com/):
\`\`\`
  $ npm install --save blacktbox-menu

  // using ES6 modules
  import Menu from 'blacktbox-menu';

  // using CommonJS modules
  var Menu = require('blacktbox-menu');
\`\`\`
`;

class Basic extends Component {
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
                    `This is A menu-maker library, and you can use it just as list-maker tool, too.`
                  }
                </div>
              </div>
              <div className='context'>
                <div className='title'>INSTALLATION</div>
                <div className='content'>
                  <MD className='content-MD' source={INSTALLATION_MD} />
                </div>
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
                        <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-menu'>
                          {
                            `blacktbox-menu`
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

export default Basic;
