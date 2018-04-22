import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from '../../assets/routeList.js';
import hashHistory from '../../assets/history.js';

import ExampleBasic from '../../example/articleRedux/example/app.js';
import ExampleRedux from '../../example/articleRedux/exampleRedux/index.js';
import ExampleRedux_Server from '../../example/articleRedux/exampleRedux_server/index.js';

import ImageRedux from '../../images/articleRedux.png';
import ImageRedux_server from '../../images/articleRedux_server.png';

const EXAMPLE_BASIC_ALGORITHM = 
`<!-- Require or Import what you need -->

<!-- Start: Define the component of User list -->
class Example extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  componentDidMount () {
    /* [Store]: Fetch data */
    this.fetchData();
  };

  /* [View]: Render component */
  render () {...};
  
  /* [Action]: Actions to access Store */
  _addHandler () {};
  _moveHandler () {};
  _removeHandler () {};
};
<!-- End: Define the component of User list -->

<!-- Export component -->
`;
const EXAMPLE_REDUX_INSTALL =
`$ npm install --save redux
$ npm install --save react-redux
`;
const EXAMPLE_REDUX_VIEW_CONTAINER = 
`import { connect } from 'react-redux';
<!-- Require or Import what action.js you need -->

const Container = ({ dispatch }) => {
  return ...; /* render */
};

export default connect()(Container);
`;
const EXAMPLE_REDUX_VIEW_CONNECT_CONTAINER =
`<!-- Require or Import Component -->
<!-- Require or Import what action.js you need -->

const mapStateToProps = ( state, ownProps ) => { ... };
const mapDispatchToProps = ( dispatch, ownProps ) => { ... };
const mergeProps = ( stateProps, dispatchProps, ownProps ) => {...}; /* optional */

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Component);
`;
const EXAMPLE_REDUX_VIEW_CONNECT_COMPONENT =
`import React from 'react';
<!-- Require or Import what you need -->

const Component = ({ ... }) => {
  return ...; /* render */
};

export default Component;
`;
const EXAMPLE_REDUX_ACTION = 
`const Action = (() => {
  const actionType = () => {
    return { ... };
  };
  ...
  return {
    actionType: actionType,
    ...
  }
})();

export default Action;
`;
const EXAMPLE_REDUX_REDUCER_INDEX = 
`import { combineReducers } from 'redux';
<!-- Require or Import reducer branches -->

const reducers = combineReducers({
  [reducer branch],
  ...
});

export default reducers;
`;
const EXAMPLE_REDUX_REDUCER_BRANCH = 
`const ReducerBranch = (state = [], action) => {
  switch (action['type']) {
    let newState = state;
    case actionType:
      ...
      return newState;
      break;
    ...
    default:
      return newState;
      break;
  }
}

export default ReducerBranch;
`;

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Redux Intruduction</h1>
            <span>Conceptual Introduction and simple example</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>INTRODUCTION</div>
          <div className='content'>
            <span>After knowing the concept of Flux. We are going to learn the concept of <a target='_blank' href='https://www.npmjs.com/package/redux'>{`Redux`}<FA name='external-link' fixedWidth/></a> and use in our example for practice. My source code of example is <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleRedux/example'>{`here`}<FA name='external-link' fixedWidth/></a>.</span>
          </div>
          <div className='content'>
            <h3>Example</h3>
            <div className='content'>
              <span>For Redux's example, I made a little different from Flux's.</span>
            </div>
            <div className='content-example'>
              <ExampleBasic/>
            </div>
            <div className='content'>
              <span>Basically, the code structure is same as original version of Flux's. Just made user list into two part: left and right. Actually in this case, we can do mode of left and right by single function. But It is in the purpose to simulate the situation of multiple data. It can be implemented in traditional way as source code. It also can be implemented in Flux way. For what if we take them to two totally different function? That is our next step.</span>
              <pre className='content-pre'>{EXAMPLE_BASIC_ALGORITHM}</pre>
            </div>
          </div>
          <div className='content'>
            <h3>Redux</h3>
            <div className='content'>
              <span>Here is the picture of Redux's relationship.</span>
            </div>
            <div className='content-image'>
              <img src={ImageRedux}/>
            </div>
            <div className='content'>
              <span>To simplify our code base, it also works with <a target='_blank' href='index.html#/article/component_presentational_and_container'>{`Component: Presentational and Container`}<FA name='external-link' fixedWidth/></a>. And to implement the example in Redux. We need to install some packages:</span>
              <pre className='content-pre'>{EXAMPLE_REDUX_INSTALL}</pre>
            </div>
            <div className='content'>
              <h3>View</h3>
              <div className='content'>
                <span>Here, View seperate to Component and Container. We can just render Container to app.js, or render Component to app.js. If our component show with store, we can connect it with container.</span>
                <h3>Render Container</h3>
                <div className='content'>
                  <pre className='content-pre'>{EXAMPLE_REDUX_VIEW_CONTAINER}</pre>
                </div>
                <h3>Render Component connected with Container</h3>
                <div className='content'>
                  <span>Container part</span>
                  <pre className='content-pre'>{EXAMPLE_REDUX_VIEW_CONNECT_CONTAINER}</pre>
                </div>
                <div className='content'>
                  <span>Component part</span>
                  <pre className='content-pre'>{EXAMPLE_REDUX_VIEW_CONNECT_COMPONENT}</pre>
                </div>
              </div>
              <h3>Action</h3>
              <div className='content'>
                <span>In Action, we just define each Action type correspond to dispatch event.</span>
                <pre className='content-pre'>{EXAMPLE_REDUX_ACTION}</pre>
              </div>
              <h3>Reducer</h3>
              <div className='content'>
                <span>Cause dispatch and store are accessed by Redux.js. We just need to define reducer. In general used, we need to define lots of reducer, and combine them to gether for redux.js.</span>
                <h3>Combined</h3>
                <div className='content'>
                  <pre className='content-pre'>{EXAMPLE_REDUX_REDUCER_INDEX}</pre>
                </div>
                <h3>Branch</h3>
                <div className='content'>
                  <pre className='content-pre'>{EXAMPLE_REDUX_REDUCER_BRANCH}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='context'>
          <div className='title'>PRODUCTION</div>
          <div className='content'>
            <span>Here we go! This is the example in Redux version.</span>
          </div>
          <div className='content-example'>
            <ExampleRedux/>
          </div>
        </div>
        <div className='context'>
          <div className='title'>ADVANCED</div>
          <div className='content'>
            <span>In Flux's, We can update by ourself. However in Redux's, we centralize all state in Redux. So that with difference from Flux's, we need fetch API beneath reducer. And that is reason why we almost use stateless function both in Container and Component.</span>
          </div>
          <div className='content-image'>
            <img src={ImageRedux_server}/>
          </div>
          <div className='content'>
            <span>Then, here is the User List work with server API. And also here is the source code of <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleRedux/exampleRedux_server'>{`Redux's example with server`}<FA name='external-link' fixedWidth/></a></span>
          </div>
          <div className='content-example'>
            <ExampleRedux_Server/>
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
    hashHistory.push(routeList[index]);
    window.scrollTo(0,0);
  };
};

export default Index;
