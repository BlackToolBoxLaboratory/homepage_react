import React, { Component } from 'react';
import FA from 'react-fontawesome';

import {SideContent_backdoor} from '../home.js';

import Layout from '../../components/layout.js';

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

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <Layout.MainTitle>{mainTitle}</Layout.MainTitle>
        <Layout.MainDescription>{mainDescriptionStr}</Layout.MainDescription>
        <Layout.Section>
          <Layout.SectionTitle>{setupTitle}</Layout.SectionTitle>
          <Layout.Content>{setupContent}</Layout.Content>
          <Layout.Pre>{SETUP_PRE}</Layout.Pre>
          <Layout.Content>{setupFinishedContent}</Layout.Content>
        </Layout.Section>
        <Layout.Section>
          <Layout.SectionTitle>{libraryListTitle}</Layout.SectionTitle>
          <Layout.Content>{libraryListContent}</Layout.Content>
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
        </Layout.Section>
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
