import React, { Component } from 'react';
import FA from 'react-fontawesome';

import {SideContent_backdoor} from '../home.js';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>Blacktbox-demo <a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `The Blacktbox-demo shows demonstrations for all the BTB Lab's tools.`;

const setupTitle = `SETUP`;
const setupContent = (<span>Firstly, you need <a target='_blank' href='https://nodejs.org/en/'>{`Node.js`}<FA name='external-link' fixedWidth/></a> and <a target='_blank' href='https://www.npmjs.com'>{`NPM`}<FA name='external-link' fixedWidth/></a>. And then you can clone our code and run it by these commands:</span>);
const setupFinishedContent = (<span>Welcome to <a target='_blank' href='http://localhost:9000'>{`http://localhost:9000`}<FA name='external-link' fixedWidth/></a>.</span>);

const libraryListTitle = `BLB LIBRARY LIST`;
const libraryListContent = `This is the list of BLB Lab's API demonstrated here.`;

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

const Index = (props) => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <AL.MainTitle>{mainTitle}</AL.MainTitle>
      <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
      <AL.Section>
        <AL.SectionTitle>{setupTitle}</AL.SectionTitle>
        <AL.Content>{setupContent}</AL.Content>
        <AL.Pre>{SETUP_PRE}</AL.Pre>
        <AL.Content>{setupFinishedContent}</AL.Content>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>{libraryListTitle}</AL.SectionTitle>
        <AL.Content>{libraryListContent}</AL.Content>
        <ul>
        {
          LibraryList.map((entry)=>{
            let content_li = [];
            content_li.push(
              <li>{entry.name}<FA className='linkBtn' onClick={()=>{_redirectHandler(entry.link)}} name='link' fixedWidth/></li>
            )
            return content_li;
          })
        }
        </ul>
      </AL.Section>
    </div>
  );
  return content;
  
  function _redirectHandler (index) {
    let obj = {
      acticveIndex: index
    }
    SideContent_backdoor ('menuRedirect', obj);
  };
};

export default Index;
