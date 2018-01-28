import React, { Component } from 'react';
import FA from 'react-fontawesome';

import {SideContent_backdoor} from './home.js';

class NotFound extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  };
  render () {
      return (
          <div className='wrapper wrapper-basic'>
              <div className='context'>
                <div className='title'>404 Page Not Found</div>
                <div className='content'>
                  {
                    `Oops, the page of URL is not exist, or we are working on it.`
                  }
                </div>
              </div>
          </div>
      );
  };
};

export default NotFound;
