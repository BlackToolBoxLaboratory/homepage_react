import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from '../../assets/routeList.js';
import hashHistory from '../../assets/history.js';

import Layout from '../../components/layout.js';

const mainTitle = `Articles`;
const mainDescriptionStr = `There are my articles introducing some knowledge in conceptual.`;

const articleListTitle = `ARTICLE LIST`;
const articleListContent = `We would list to introduce you some others masterpiece in conceptual. Hope our articles will do help somehow in algorithmic angle. And if you have problem to use them, welcome to contact me. We can figure it out together.`;

const articleList = new Array(
  {'name': 'Component: Presentational and Container', 'link': 'BTB_ATCS_COMPONENT_PNC', 'update': '2018-03-24'},
  {'name': 'Flux Introduction',                       'link': 'BTB_ATCS_FLUX',          'update': '2018-03-11'},
  {'name': 'Redux Introduction',                      'link': 'BTB_ATCS_REDUX',         'update': '2018-04-22'}
)

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <Layout.MainTitle>{mainTitle}</Layout.MainTitle>
        <Layout.MainDescription>{mainDescriptionStr}</Layout.MainDescription>
        <Layout.Section>
          <Layout.SectionTitle>{articleListTitle}</Layout.SectionTitle>
          <Layout.Content>{articleListContent}</Layout.Content>
          <Layout.Content>
            <ul>
            {
              articleList.map((entry)=>{
                let content_li = [];
                content_li.push(
                  <li>
                    <span>{entry.name}</span>
                    <FA className='linkBtn' onClick={()=>{this._redirectHandler(entry.link)}} name='link' fixedWidth/>
                    <Layout.Notice>[UPDATE: {entry.update}]</Layout.Notice>
                  </li>
                )
                return content_li;
              })
            }
            </ul>
          </Layout.Content>
        </Layout.Section>
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
