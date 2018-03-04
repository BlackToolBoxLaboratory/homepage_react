import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from '../../../asset/routeList.js';
import history from '../../../asset/history.js';

import ExampleBasic from './exampleBasic/app.js';
import ExamplFlux from './exampleFlux/app.js';

import ImageFlux from '../../../image/articleFlux.png';
import ImageFlux_Server from '../../../image/articleFlux_server.png';

const EXAMPLE_BASIC_ALGORITHM = 
`<!-- Require or Import what you need -->

<!-- Start: Define the component of User list -->
class ExampleBasic extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  componentDidMount () {
    /* [Store]: Fetch data */
    this.fetchData();
  };

  /* [View]: Render component */
  render ();
  
  /* [Action]: Actions to access Store */
  _addHandler () {};
  _removeHandler () {};
};
<!-- End: Define the component of User list -->

<!-- Export component -->
`;
const EXAMPLE_FLUX_INSTALL =
`$ npm install --save flux
$ npm install --save merge
`;
const EXAMPLE_FLUX_VIEW = 
`<!-- Require or Import what you need -->
import ExampleDispatcher from '../dispatchers/exampleDispatcher.js';
import ExampleStore from '../stores/exampleStore.js';
import ExampleAction from '../actions/exampleAction.js';

<!-- Start: Define the component of User list -->
class ExampleBasic extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  /* [Store] add listen  */
  componentDidMount () {
    ExampleStore.addChangeListener(this.refresh);
    this.fetchData();
  };
  /* [Store] remove listen  */
  componentWillUnmount () {
    ExampleStore.removeChangeListener(this.refresh);
  };
  render ();

  /* [Action]: trigger action to access Store */
  _addHandler () {};
  _removeHandler () {};
};
<!-- End: Define the component of User list -->

<!-- Export component -->
`;
const EXAMPLE_FLUX_ACTION = 
`<!-- Require or Import what you need -->
import ExampleDispatcher from '../dispatchers/exampleDispatcher.js';

/* [Dispatcher] dispatch data to store  */
const ExampleAction = {
  fetch: (userList)=>{
    ExampleDispatcher.dispatch({
      actionType: 'fetch',
      userList: userList
    });
  },
  add: (userName)=>{
    ExampleDispatcher.dispatch({
      actionType: 'add',
      userName: userName
    });
  },
  remove: (userId)=>{
    ExampleDispatcher.dispatch({
      actionType: 'remove',
      userId: userId
    });
  }
};
<!-- Export component -->
`;
const EXAMPLE_FLUX_DISPATCHER = 
`import { Dispatcher } from 'flux';
let ExampleDispatcher = new Dispatcher();
export default ExampleDispatcher;
`;
const EXAMPLE_FLUX_STORE = 
`<!-- Require or Import what you need -->
import Merge from 'merge';
import { EventEmitter } from 'events';

import ExampleDispatcher from '../dispatchers/exampleDispatcher.js';

/* [Store]] store data */
let dataList = new Array();

/* [Store]] create event id and merge store event to emitter */
const EXAMPLE_EVENT_ID = 'example_change';
const ExampleStore = Merge(EventEmitter.prototype,{
  getData: function(){
		return dataList;
	},
  emitChange: function () {
    this.emit(EXAMPLE_EVENT_ID);
  },
  addChangeListener: function (callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* [Dispatcher] regist event */
ExampleDispatcher.register((event)=>{
  switch(event.actionType) 
  {
    case 'fetch':
      ...
      ExampleStore.emitChange();
      break;
    case 'add':
      ...
      ExampleStore.emitChange();
      break;
    case 'remove':
      ...
      ExampleStore.emitChange();
      break;
  }
});
<!-- Export component -->
`;

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Flux Introduction</h1>
            <span>Conceptual introduction and simple example</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>INTRODUCTION</div>
          <div className='content'>
            <span>In this article, we are going to talk about <a target='_blank' href='https://www.npmjs.com/package/flux'>{`Flux`}<FA name='external-link' fixedWidth/></a>. The source code is <a target='_blank' href='https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture'>{`opened`}<FA name='external-link' fixedWidth/></a>. If you need more clear example code. The other article <a target='_blank' href='https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture'>{`Getting To Know Flux, the React.js Architecture`}<FA name='external-link' fixedWidth/></a> may be more suitable.</span>
          </div>
          <div className='content'>
            <h3>Example</h3>
            <div className='content'>
              <span>The following shown is a user list, and it is the example with our discussion to Flux.</span>
            </div>
            <div className='content-example'>
              <ExampleBasic/>
            </div>
            <div className='content'>
              <span>To implement the User List. Basically we need three factors: render(View), data(Store), access handler(Action). It is quite easy to implement it by coding them all together. However in systemic angle, if we want to separate them to keep system construction defined and used clear(to unify or generalize), we may need to use some framework to let system keep clear like Flux. And next, we will show it in Flux way. Comparing my <a target='_blank' href=''>{`Example`}<FA name='external-link' fixedWidth/></a>, I simplify the source code for more focus on the construction and add some notation, like this:</span>
              <pre className='content-pre'>{EXAMPLE_BASIC_ALGORITHM}</pre>
            </div>
          </div>
          <div className='content'>
            <h3>Flux</h3>
            <div className='content'>
              <span>In original, we can trigger rerender easy while coding all factors in one-file. But while they are separated to files, we will need the  "Dispatch and Listen". And here is the picture of Flux's relationship.</span>
            </div>
            <div className='content-image'>
              <img src={ImageFlux}/>
            </div>
            <div className='content'>
              <div className='content'>
                <span>To implement the example in Flux. We need to install some packages:</span>
                <pre className='content-pre'>{EXAMPLE_FLUX_INSTALL}</pre>
              </div>
            </div>
            <div className='content'>
              <h3>View</h3>
              <div className='content'>
                <span>View have to get a new dispatcher, be listened by Store and add Action for used.</span>
                <pre className='content-pre'>{EXAMPLE_FLUX_VIEW}</pre>
              </div>
              <h3>Action</h3>
              <div className='content'>
                <span>In Action, we just define each Action type correspond to dispatch event.</span>
                <pre className='content-pre'>{EXAMPLE_FLUX_ACTION}</pre>
              </div>
              <h3>Dispatcher</h3>
              <div className='content'>
                <span>The only one thing Dispatcher need to do is create a new Dispatcher.</span>
                <pre className='content-pre'>{EXAMPLE_FLUX_DISPATCHER}</pre>
              </div>
              <h3>Store</h3>
              <div className='content'>
                <span>Store have two part. To create Store's emitter by merge events.EventEmitter, and let dispatch er regist event meanwhile define what each event needs to access to Store.</span>
                <pre className='content-pre'>{EXAMPLE_FLUX_STORE}</pre>
              </div>
            </div>
          </div>
        </div>
        <div className='context'>
          <div className='title'>PRODUCTION</div>
          <div className='content'>
            <span>Here we go! This example in Flux version.</span>
          </div>
          <div className='content-example'>
            <ExamplFlux/>
          </div>
        </div>
        <div className='context'>
          <div className='title'>ADVANCED</div>
          <div className='content'>
            <span>The more usual case. What if our data is coming from server and where should we add server API in the Flux flow? To keep the rule of Flux framework. We use APIs to access server's data before Action. However why it is not added duing Store? Think the definition of "What the data actually is for Flux?". Here in Flux, the data means View's data, not the server's data. So that, we allowed to access server's data directly, then Store will get data from server. The following picture is the flow of Flux with server API.</span>
          </div>
          <div className='content-image'>
            <img src={ImageFlux_Server}/>
          </div>
        </div>
        <div className='context'>
          <div className='buttonGroup'>
            <div className='backButton' onClick={()=>{this._redirectHandler('BTB_ATCS')}}>
              <FA name='arrow-left' fixedWidth />
              <span>Back to Articles</span>
            </div>
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
