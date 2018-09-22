import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import AL from 'components/articleLayout.js';
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
  {name : 'Blacktbox-list',  link : 'BTB_LIST_BASIC'},
  {name : 'Blacktbox-table', link : 'BTB_TABLE_BASIC'},
  {name : 'Blacktbox-menu',  link : 'BTB_MENU_BASIC'}
);
const ContactList = new Array(
  {name : 'Email',     linkName : 'vannoel0628@gmail.com',             href : 'mailto://vannoel0628@gmail.com',            icon : ['fas', 'envelope']},
  {name : 'Homepage',  linkName : 'blacktoolboxlaboratory.github.io',  href : 'https://blacktoolboxlaboratory.github.io',  icon : ['fas', 'home']}
);

const About = () => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <AL.MainTitle>{mainTitle}</AL.MainTitle>
      <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
      <AL.Section>
        <AL.SectionTitle>{articlesTitle}</AL.SectionTitle>
        <AL.Content>
          <span>{articlesContent}</span>
          <FA className='linkBtn' onClick={() => {_redirectHandler('BTB_ATCS');}} icon={['fas', 'link']} fixedWidth/>
        </AL.Content>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>{demonstrationTitle}</AL.SectionTitle>
        <AL.Content>
          <span>{demonstrationContent}</span>
          <FA className='linkBtn' onClick={() => {_redirectHandler('BTB_DEMO');}} icon={['fas', 'link']} fixedWidth/>
        </AL.Content>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>{libraryTitle}</AL.SectionTitle>
        <AL.Content>{libraryContent}</AL.Content>
        <ul>
          {
            LibraryList.map((entry) => {
              let content_li = [];
              content_li.push(
                <li>{entry.name}<FA className='linkBtn' onClick={() => {_redirectHandler(entry.link);}} icon={['fas', 'link']} fixedWidth/></li>
              );
              return content_li;
            })
          }
        </ul>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>CONTACT ME</AL.SectionTitle>
        <ul>
          {
            ContactList.map((entry) => {
              let content_li = [];
              content_li.push(
                <li>
                  <FA icon={entry.icon} fixedWidth/>
                  <span style={{'margin-left' : '5px'}}>{`${entry.name}:`}</span>
                  <span style={{'margin-left' : '5px'}}>
                    <a target='_blank' href={entry.href}>{entry.linkName}<FA icon={['fas', 'external-link-alt']} fixedWidth/></a>
                  </span>
                </li>
              );
              return content_li;
            })
          }
        </ul>
      </AL.Section>
    </div>
  );
  return content;

  function _redirectHandler ( index ) {
    let obj = {
      acticveIndex : index
    };
    SideContent_backdoor('menuRedirect', obj);
  }
};

export default About;
