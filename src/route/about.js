import React, { Component } from 'react';
import FA from 'react-fontawesome';

import {SideContent_backdoor} from './home.js';

const LibraryList = new Array(
  {name: 'Blacktbox-list',  link: 'BTB_LIST_BASIC'},
  {name: 'Blacktbox-table', link: 'BTB_TABLE_BASIC'},
  {name: 'Blacktbox-menu',  link: 'BTB_MENU_BASIC'}
);
const ContactList = new Array(
  {name: 'Email',     linkName:'vannoel0628@gmail.com',             href:'mailto://vannoel0628@gmail.com',            FA:'envelope'},
  {name: 'Homepage',  linkName:'blacktoolboxlaboratory.github.io',  href:'https://blacktoolboxlaboratory.github.io',  FA:'home'}
);

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
                  <span>Hi! I am Noel. I established The Black Toolbox Laboratory(BTB Lab) since November 1, 2017. The mainly purpose to start the project is to develop some useful tools for helping coding Website easier. And there is a hard work and also a challenge to let tools applicated with highly free degree. Though, I am not full-time in this project. I still sincerely welcome to recieve your great idea or your needing by sending mails or booking issues on GitHub.</span>
                </div>
              </div>
              <div className='context'>
                <div className='title'>LIBRARY LIST</div>
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
              <div className='context'>
                <div className='title'>CONTACT ME</div>
                <ul>
                {
                  ContactList.map((entry)=>{
                    let content_li = [];
                    content_li.push(
                      <li>
                        <FA name={entry.FA} fixedWidth/>
                        <span style={{'margin-left':'5px'}}>{`${entry.name}:`}</span>
                        <span style={{'margin-left':'5px'}}>
                          <a target='_blank' href={entry.href}>{entry.linkName} <FA name='external-link' fixedWidth/></a>
                        </span>
                      </li>
                    );
                    return content_li;
                  })
                }
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
