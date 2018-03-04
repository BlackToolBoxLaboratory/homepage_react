import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from '../../asset/routeList.js';
import aritcalList from '../../asset/articleList.js';
import history from '../../asset/history.js';

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Articles</h1>
            <span>There are my articles introducing some knowledge in conceptual.</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>ARTICLE LIST</div>
          <div className='content'>
            <span>Here, I want to introduce some others masterpiece in conceptual. I hope the articles will help in algorithmic. After all, we build system not only by toolbox but also our algorithm, right? But if you have problem to use but not bug issue, welcome to mail to me. We can figure it out together.</span>
          </div>
          <div className='content'>
            <ul>
            {
              aritcalList.map((entry)=>{
                let content_li = [];
                content_li.push(
                  <li>
                    <span>{entry.name}</span>
                    <FA className='linkBtn' onClick={()=>{this._redirectHandler(entry.link)}} name='link' fixedWidth/>
                    <span className='post'>[POST: {entry.post}]</span>
                    <span className='update'>[UPDATE: {entry.update}]</span>
                  </li>
                )
                return content_li;
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
    return content;
  };

  _redirectHandler (index) {
    history.push(routeList[index]);
    window.scrollTo(0,0);
  };
};

export default Index;
