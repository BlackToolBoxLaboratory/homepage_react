import React, { Component } from 'react';
import FA from 'react-fontawesome';

import {SideContent_backdoor} from './home.js';

class About extends Component {
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
                    `Hi! I am Noel. I established The Black Toolbox Laboratory(BTB Lab) since November 1, 2017. The mainly purpose to start the project is to develop some useful libraries for helping building Website easier. And there is a hard work and also a challenge to let libraries applicated with highly free degree. Though, I am not full-time in this project. I still sincerely welcome to recieve your great idea or your needing by sending mails or booking issues on GitHub.`
                  }
                </div>
              </div>
              <div className='context'>
                <div className='title'>LIBRARY LIST</div>
                <ul>
                  <li>Blacktbox-demo <FA className='linkBtn' onClick={()=>{this._redirectHandler('BTB_DEMO')}} name='link' fixedWidth/></li>
                  <div className='content'>
                    {
                      `This is not a library actually, but it shows demonstrations for all the BTB Lab's libraries. For Build the Webside up, I also use some others' libraries. With great appreciations for their masterpieces. If you have some problem of using their's, welcome to ask by sending mails. I will do my best as I can to help you.`
                    }
                  </div>
                  <li>Blacktbox-menu <FA className='linkBtn' onClick={()=>{this._redirectHandler('BTB_MENU_BASIC')}} name='link' fixedWidth/></li>
                  <div className='content'>
                    {
                      `This is A menu-maker library, and you can use it just as list-maker tool, too.`
                    }
                  </div>
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
                      <FA name='external-link' fixedWidth/>
                      <span style={{'margin-left':'5px'}}>Homepage:</span>
                      <span style={{'margin-left':'5px'}}>
                        <a target='_blank' href='https://blacktoolboxlaboratory.github.io/'>
                          {
                            `blacktoolboxlaboratory.github.io`
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

export default About;
