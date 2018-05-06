import React, { Component } from 'react';
import FA from 'react-fontawesome';

import ExampleBasic from 'example/articleRedux/example/index.js';
import ExampleRedux from 'example/articleRedux/exampleRedux/index.js';
import ExampleRedux_Server from 'example/articleRedux/exampleRedux_server/index.js';

import ImageRedux from 'images/articleRedux.png';
import ImageRedux_server from 'images/articleRedux_server.png';

import ALayout from 'components/articleLayout.js';
import ArticleRedirecter from 'components/articleRedirecter.js';

const mainTitle = `Redux Introduction`;
const mainDescriptionStr = `Conceptual introduction and simple example`;

const introductionTitle = `INTRODUCTION`;
const introductionContent = (<span>After knowing the concept of Flux. We are going to learn the concept of <a target='_blank' href='https://www.npmjs.com/package/redux'>{`Redux`}<FA name='external-link' fixedWidth/></a> and use in our example for practice. My source code of example is <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleRedux/example'>{`here`}<FA name='external-link' fixedWidth/></a>.</span>);

const introductionExampleTitle = `Example`;
const introductionExampleContent = `For Redux's example, I made a little different from Flux's.`;
const introductionExampleAlgorithmDescription = `Basically, the code structure is same as original version of Flux's. Just made user list into two part: left and right. Actually in this case, we can do mode of left and right by single function. But It is in the purpose to simulate the situation of multiple data. It can be implemented in traditional way as source code. It also can be implemented in Flux way. For what if we take them to two totally different function? That is our next step.`;

const introductionReduxTitle = `Redux`;
const introductionReduxContent = `Here is the picture of Redux's relationship.`;
const introductionReduxAlgorithmDescription = (<span>To simplify our code base, it also works with <a target='_blank' href='index.html#/article/component_presentational_and_container'>{`Component: Presentational and Container`}<FA name='external-link' fixedWidth/></a>. And to implement the example in Redux. We need to install some packages:</span>);

const introductionReduxViewTitle = `View`;
const introductionReduxViewContent = `About view, it has three type of view contained pure-container, pure-component and mixed-container-and-component. The pure container is for which view will access data, but not rendered with data. And the pure component is for which view will not access data but rendered with data, or it rendered without data but state for necessary. The last type of view is mixed with container and component means the view can access data and rendered with data. Cause the pure component is used usually. We only show you the pure container view and mixed view here.`;
const introductionReduxViewContainerTitle = `Pure-container`;
const introductionReduxViewConnectTitle = `Mixed-container-and-component`;
const introductionReduxViewConnectContent = `To mixed view, First we need to define status and dispatch. Then connect to component to allow component access data.`;
const introductionReduxViewConnectContainerTag = `Container part`;
const introductionReduxViewConnectComponentTag = `Component part`;
const introductionReduxActionTitle = `Action`;
const introductionReduxActionContent = `In Action, we just define each Action type correspond to dispatch event.`;
const introductionReduxReducerTitle = `Reducer`;
const introductionReduxReducerContent = `Cause dispatch and store are accessed by Redux.js. We just need to define reducer. In general used, we need to define lots of reducer, and combine them to gether for redux.js`;
const introductionReduxReducerCombinedTitle = `Combined`;
const introductionReduxReducerBranchTitle = `Branch`;

const productionTitle = `PRODUCTION`;
const productionContent = `Here we go! This is the example in Redux version.`;

const advancedTitle = `ADVANCED`;
const advancedContent = `In Flux's, We can update by ourself. However in Redux's, we centralize all state in Redux. So that with difference from Flux's, we need fetch API beneath reducer. And that is reason why we almost use stateless function both in Container and Component.`;
const advancedServerContent = (<span>Then, here is the User List work with server API. And also here is the source code of <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleRedux/exampleRedux_server'>{`Redux's example with server`}<FA name='external-link' fixedWidth/></a></span>);

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

const Index = (props) => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <ALayout.MainTitle>{mainTitle}</ALayout.MainTitle>
      <ALayout.MainDescription>{mainDescriptionStr}</ALayout.MainDescription>
      <ALayout.Section>
        <ALayout.SectionTitle>{introductionTitle}</ALayout.SectionTitle>
        <ALayout.Content>{introductionContent}</ALayout.Content>
        <ALayout.Content>
          <ALayout.SectionSubtitle>{introductionExampleTitle}</ALayout.SectionSubtitle>
          <ALayout.Content>{introductionExampleContent}</ALayout.Content>
          <ALayout.Item><ExampleBasic/></ALayout.Item>
          <ALayout.Content>{introductionExampleAlgorithmDescription}</ALayout.Content>
          <ALayout.Pre>{EXAMPLE_BASIC_ALGORITHM}</ALayout.Pre>
        </ALayout.Content>
        <ALayout.Content>
          <ALayout.SectionSubtitle>{introductionReduxTitle}</ALayout.SectionSubtitle>
          <ALayout.Content>{introductionReduxContent}</ALayout.Content>
          <ALayout.Item><img src={ImageRedux}/></ALayout.Item>
          <ALayout.Content>{introductionReduxAlgorithmDescription}</ALayout.Content>
          <ALayout.Pre>{EXAMPLE_REDUX_INSTALL}</ALayout.Pre>
          <ALayout.Content>
            <ALayout.SectionSubtitle>{introductionReduxViewTitle}</ALayout.SectionSubtitle>
            <ALayout.Content>{introductionReduxViewContent}</ALayout.Content>
            <ALayout.Content>
              <ALayout.SectionSubtitle>{introductionReduxViewContainerTitle}</ALayout.SectionSubtitle>
              <ALayout.Pre>{EXAMPLE_REDUX_VIEW_CONTAINER}</ALayout.Pre>
            </ALayout.Content>
            <ALayout.Content>
              <ALayout.SectionSubtitle>{introductionReduxViewConnectTitle}</ALayout.SectionSubtitle>
              <ALayout.Content>{introductionReduxViewConnectContent}</ALayout.Content>
              <ALayout.Content>
                <ALayout.SectionSubtitle>{introductionReduxViewConnectContainerTag}</ALayout.SectionSubtitle>
                <ALayout.Pre>{EXAMPLE_REDUX_VIEW_CONNECT_CONTAINER}</ALayout.Pre>
                <ALayout.SectionSubtitle>{introductionReduxViewConnectComponentTag}</ALayout.SectionSubtitle>
                <ALayout.Pre>{EXAMPLE_REDUX_VIEW_CONNECT_COMPONENT}</ALayout.Pre>
              </ALayout.Content>
            </ALayout.Content>
          </ALayout.Content>
          <ALayout.Content>
            <ALayout.SectionSubtitle>{introductionReduxActionTitle}</ALayout.SectionSubtitle>
            <ALayout.Content>{introductionReduxActionContent}</ALayout.Content>
            <ALayout.Pre>{EXAMPLE_REDUX_ACTION}</ALayout.Pre>
          </ALayout.Content>
          <ALayout.Content>
            <ALayout.SectionSubtitle>{introductionReduxReducerTitle}</ALayout.SectionSubtitle>
            <ALayout.Content>{introductionReduxReducerContent}</ALayout.Content>
            <ALayout.Content>
              <ALayout.SectionSubtitle>{introductionReduxReducerCombinedTitle}</ALayout.SectionSubtitle>
              <ALayout.Pre>{EXAMPLE_REDUX_REDUCER_INDEX}</ALayout.Pre>
              <ALayout.SectionSubtitle>{introductionReduxReducerBranchTitle}</ALayout.SectionSubtitle>
              <ALayout.Pre>{EXAMPLE_REDUX_REDUCER_BRANCH}</ALayout.Pre>
            </ALayout.Content>
          </ALayout.Content>
        </ALayout.Content>
      </ALayout.Section>
      <ALayout.Section>
        <ALayout.SectionTitle>{productionTitle}</ALayout.SectionTitle>
        <ALayout.Content>{productionContent}</ALayout.Content>
        <ALayout.Item><ExampleRedux/></ALayout.Item>
      </ALayout.Section>
      <ALayout.Section>
        <ALayout.SectionTitle>{advancedTitle}</ALayout.SectionTitle>
        <ALayout.Content>{advancedContent}</ALayout.Content>
        <ALayout.Item><img src={ImageRedux_server}/></ALayout.Item>
        <ALayout.Content>{advancedServerContent}</ALayout.Content>
        <ALayout.Item><ExampleRedux_Server/></ALayout.Item>
      </ALayout.Section>
      <ALayout.Section>
        <ALayout.BtnGroup>
          <ALayout.Btn><ArticleRedirecter redirectTo={'BTB_ATCS'} /></ALayout.Btn>
        </ALayout.BtnGroup>
      </ALayout.Section>
    </div>
  );
  return content;
};

export default Index;
