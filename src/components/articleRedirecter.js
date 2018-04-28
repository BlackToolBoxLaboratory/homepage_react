import React from 'react';
import FA from 'react-fontawesome';

import routeList from '../assets/routeList.js';
import hashHistory from '../assets/history.js';

const _redirectHandler = ( index ) => {
  hashHistory.push(routeList[index]);
  window.scrollTo(0,0);
};

const ArticleRedirecter = ( props ) => {
  let content = [];
  props.className = 'btb-articleRedirectBtn ' + ((props.className) ? props.className : '');
  content.push(
    <div onClick={()=>{_redirectHandler(props.redirectTo)}} {...props}>
      <FA name='arrow-left' fixedWidth />
      <span>Back to Articles</span>
    </div>
  );
  return content;
};

export default ArticleRedirecter;
