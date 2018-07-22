import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from 'assets/routeList.js';
import hashHistory from 'assets/history.js';

import AL from 'components/articleLayout.js';

const mainTitle = `Articles`;
const mainDescriptionStr = `There are my articles introducing some knowledge in conceptual.`;

const articleListTitle = `ARTICLE LIST`;
const articleListContent = `We would list to introduce you some others masterpiece in conceptual. Hope our articles will do help somehow in algorithmic angle. And if you have problem to use them, welcome to contact me. We can figure it out together.`;

const articleList = new Array(
  {'name': 'Flux Introduction',   'link': 'BTB_ATCS_FLUX',          'updated': '2018-07-22'},
  {'name': 'Redux Introduction',  'link': 'BTB_ATCS_REDUX',         'updated': '2018-05-06'}
)

const Index = (props) => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <AL.MainTitle>{mainTitle}</AL.MainTitle>
      <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
      <AL.Section>
        <AL.SectionTitle>{articleListTitle}</AL.SectionTitle>
        <AL.Content>{articleListContent}</AL.Content>
        <AL.Content>
          <ul>
          {
            articleList.map((entry)=>{
              let content_li = [];
              content_li.push(
                <li>
                  <span>{entry.name}</span>
                  <FA className='linkBtn' onClick={()=>{_redirectHandler(entry.link)}} name='link' fixedWidth/>
                  <AL.Notice> [UPDATED: {entry.updated}]</AL.Notice>
                </li>
              )
              return content_li;
            })
          }
          </ul>
        </AL.Content>
      </AL.Section>
    </div>
  );
  return content;

  function _redirectHandler ( index ) {
    hashHistory.push(routeList[index]);
    window.scrollTo(0,0);
  };
};

export default Index;
