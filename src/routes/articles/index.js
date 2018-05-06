import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from 'assets/routeList.js';
import hashHistory from 'assets/history.js';

import ALayout from 'components/articleLayout.js';

const mainTitle = `Articles`;
const mainDescriptionStr = `There are my articles introducing some knowledge in conceptual.`;

const articleListTitle = `ARTICLE LIST`;
const articleListContent = `We would list to introduce you some others masterpiece in conceptual. Hope our articles will do help somehow in algorithmic angle. And if you have problem to use them, welcome to contact me. We can figure it out together.`;

const articleList = new Array(
  {'name': 'Flux Introduction',                       'link': 'BTB_ATCS_FLUX',          'updated': '2018-05-06'},
  {'name': 'Redux Introduction',                      'link': 'BTB_ATCS_REDUX',         'updated': '2018-05-06'}
)

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <ALayout.MainTitle>{mainTitle}</ALayout.MainTitle>
        <ALayout.MainDescription>{mainDescriptionStr}</ALayout.MainDescription>
        <ALayout.Section>
          <ALayout.SectionTitle>{articleListTitle}</ALayout.SectionTitle>
          <ALayout.Content>{articleListContent}</ALayout.Content>
          <ALayout.Content>
            <ul>
            {
              articleList.map((entry)=>{
                let content_li = [];
                content_li.push(
                  <li>
                    <span>{entry.name}</span>
                    <FA className='linkBtn' onClick={()=>{this._redirectHandler(entry.link)}} name='link' fixedWidth/>
                    <ALayout.Notice>[UPDATED: {entry.updated}]</ALayout.Notice>
                  </li>
                )
                return content_li;
              })
            }
            </ul>
          </ALayout.Content>
        </ALayout.Section>
      </div>
    );
    return content;
  };

  _redirectHandler ( index ) {
    hashHistory.push(routeList[index]);
    window.scrollTo(0,0);
  };
};

export default Index;
