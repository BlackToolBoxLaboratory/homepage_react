import React, { Component } from 'react';
import FA from 'react-fontawesome';

import AL from 'components/articleLayout.js';

import {SideContent_backdoor} from './home.js';

const notFoundTitle = `404 Page Not Found`;
const notFoundContent = `Oops, the page of URL is not exist, or we are working on it.`;

const NotFound = (props) => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <AL.MainTitle>{notFoundTitle}</AL.MainTitle>
      <AL.MainDescription>{notFoundContent}</AL.MainDescription>
    </div>
  );
  return content;
};

export default NotFound;
