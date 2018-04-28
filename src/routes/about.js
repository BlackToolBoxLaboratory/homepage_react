import React, { Component } from 'react';
import FA from 'react-fontawesome';

import Layout from '../components/layout.js';
import {SideContent_backdoor} from './home.js';

const mainTitle = `About`;
const mainDescriptionStr = `Here to show our sitemap with brief introduction.`;

const articlesTitle = `ARTICLES`;
const articlesContent = `We would list to introduce you some others masterpiece in conceptual. Hope our articles will do help somehow in algorithmic angle. And if you have problem to use them, welcome to contact me. We can figure it out together.`;
const demonstrationTitle = `DEMONSTRATION`;
const demonstrationContent = `The demonstration is this webside actually. It is local-side version, and you can see the source code.`;
const libraryTitle = `LIBRARY LIST`;
const libraryContent = `We express some idea with our library. While to implement a webpage, we tend to more focus on 'definition' and 'style' than 'construct'. It means our library developed on purpose to help you to construct your page on functional part. And you just need to give us your definition of some object, array, string ..., etc, for all you need to show. Then you can spend more time to focus on style page.`;

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
  render () {
    return (
      <div className='wrapper wrapper-basic'>
        <Layout.MainTitle>{mainTitle}</Layout.MainTitle>
        <Layout.MainDescription>{mainDescriptionStr}</Layout.MainDescription>
        <Layout.Section>
          <Layout.SectionTitle>{articlesTitle}</Layout.SectionTitle>
          <Layout.Content>
            <span>{articlesContent}</span>
            <FA className='linkBtn' onClick={()=>{this._redirectHandler('BTB_ATCS')}} name='link' fixedWidth/>
          </Layout.Content>
        </Layout.Section>
        <Layout.Section>
          <Layout.SectionTitle>{demonstrationTitle}</Layout.SectionTitle>
          <Layout.Content>
            <span>{demonstrationContent}</span>
            <FA className='linkBtn' onClick={()=>{this._redirectHandler('BTB_DEMO')}} name='link' fixedWidth/>
          </Layout.Content>
        </Layout.Section>
        <Layout.Section>
          <Layout.SectionTitle>{libraryTitle}</Layout.SectionTitle>
          <Layout.Content>{libraryContent}</Layout.Content>
          <ul>
          {
            LibraryList.map((entry)=>{
              let content_li = [];
              content_li.push(
                <li>
                  <span>{entry.name}</span>
                  <FA className='linkBtn' onClick={()=>{this._redirectHandler(entry.link)}} name='link' fixedWidth/>
                </li>
              )
              return content_li;
            })
          }
          </ul>
        </Layout.Section>
        <Layout.Section>
          <Layout.SectionTitle>CONTACT ME</Layout.SectionTitle>
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
        </Layout.Section>
      </div>
    );
  };

  _redirectHandler ( index ) {
    let obj = {
      acticveIndex: index
    }
    SideContent_backdoor ('menuRedirect', obj);
  };
};

export default About;
