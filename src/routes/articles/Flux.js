import React, { Component } from 'react';
import FA from 'react-fontawesome';

import BTBList from 'blacktbox-list';

import ExampleBasic from '../../example/articleFlux/example/app.js';
import ExamplFlux from '../../example/articleFlux/exampleFlux/app.js';
import ExamplFlux_Server from '../../example/articleFlux/exampleFlux_server/app.js';

import ImageFlux from '../../images/articleFlux.png';
import ImageFlux_Server from '../../images/articleFlux_server.png';

import Layout from '../../components/layout.js';
import ArticleRedirecter from '../../components/articleRedirecter.js';

const mainTitle = `Flux Introduction`;
const mainDescriptionStr = `Conceptual introduction and simple example`;

const introductionTitle = `INTRODUCTION`;
const introductionContent = (<span>In this article, we are going to talk about <a target='_blank' href='https://www.npmjs.com/package/flux'>{`Flux`}<FA name='external-link' fixedWidth/></a>. If you need more clear example about learning Flux. The other article <a target='_blank' href='https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture'>{`Getting To Know Flux, the React.js Architecture`}<FA name='external-link' fixedWidth/></a> may be more suitable.</span>);

const introductionExampleTitle = `Example`;
const introductionExampleContent = (<span>The following shown is a user list. It is the example with our discussion to Flux. And here is source code of <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleFlux/example'>{`example`}<FA name='external-link' fixedWidth/></a>.</span>);
const introductionExampleAlgorithmDescription = (<span>To implement the User List. Basically we need three factors: render(View), data(Store), access handler(Action). It is quite easy to implement it by coding them all together. However in systemic angle, if we want to separate them to keep system construction defined and used clear(to unify or generalize), we may need to use some framework to let system keep clear like Flux. And next, we will show it in Flux way. Comparing my <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleFlux/exampleFlux'>{`Flux's example`}<FA name='external-link' fixedWidth/></a>, I simplify the source code for more focus on the construction and add some notation, like this:</span>);

const introductionFluxTitle = `Flux`;
const introductionFluxContent = `In original, we can trigger rerender easy while coding all factors in one-file. But while they are separated to files, we will need the  "Dispatch and Listen". And here is the picture of Flux's relationship.`;
const introductionFluxAlgorithmDescription = `To implement the example in Flux. We need to install some packages:`;

const introductionFluxViewTitle = `View`;
const introductionFluxViewContent = `View have to get a new dispatcher, be listened by Store and add Action for used.`;
const introductionFluxActionTitle = `Action`;
const introductionFluxActionContent = `In Action, we just define each Action type correspond to dispatch event.`;
const introductionFluxDispatcherTitle = `Dispatcher`;
const introductionFluxDispatcherContent = `The only one thing Dispatcher need to do is create a new Dispatcher.`;
const introductionFluxStoreTitle = `Store`;
const introductionFluxStoreContent = `Store have two part. To create Store's emitter by merge events.EventEmitter, and let dispatch er regist event meanwhile define what each event needs to access to Store.`;

const productionTitle = `PRODUCTION`;
const productionContent = `Here we go! This is the example in Flux version.`;

const advancedTitle = `ADVANCED`;
const advancedContent = `The more usual case. What if our data is coming from server and where should we add server API in the Flux flow? To keep the rule of Flux framework. We use APIs to access server's data before Action. However why it is not added duing Store? Think the definition of "What the data actually is for Flux?". Here in Flux, the data means View's data, not the server's data. So that, we allowed to access server's data directly, then Store will get data from server. The following picture is the flow of Flux with server API.`;
const advancedServerContent = (<span>Then, here is the User List work with server API. And also here is the source code of <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleFlux/exampleFlux_server'>{`Flux's example with server`}<FA name='external-link' fixedWidth/></a></span>);

const noticeTitle = `NOTICE`;
const noticeContent = `It has a notice here about many repositories in used. In this page, we have two repositories: exampleFlux and exampleFlux_server. There are two things need to be cautioned:`;

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
class ExampleFlux extends Component {
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
  render () {...};

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
  /* Here, the function must be unique. */
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

const NOTICE = new Array(
  {'name': `Dispatcher is unique: In our webside, Dispatcher in at /assets, and it imported in first time at index.js.`},
  {'name': `All Stores' event functions must named uniquely: Cause all stores use the same EventEmitter, they need to named their event function differently.`}
);

const Index = (props) => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <Layout.MainTitle>{mainTitle}</Layout.MainTitle>
      <Layout.MainDescription>{mainDescriptionStr}</Layout.MainDescription>
      <Layout.Section>
        <Layout.SectionTitle>{introductionTitle}</Layout.SectionTitle>
        <Layout.Content>{introductionContent}</Layout.Content>
        <Layout.Content>
          <Layout.SectionSubtitle>{introductionExampleTitle}</Layout.SectionSubtitle>
          <Layout.Content>{introductionExampleContent}</Layout.Content>
          <Layout.Item><ExampleBasic/></Layout.Item>
          <Layout.Content>{introductionExampleAlgorithmDescription}</Layout.Content>
          <Layout.Pre>{EXAMPLE_BASIC_ALGORITHM}</Layout.Pre>
        </Layout.Content>
        <Layout.Content>
          <Layout.SectionSubtitle>{introductionFluxTitle}</Layout.SectionSubtitle>
          <Layout.Content>{introductionFluxContent}</Layout.Content>
          <Layout.Item><img src={ImageFlux}/></Layout.Item>
          <Layout.Content>{introductionFluxAlgorithmDescription}</Layout.Content>
          <Layout.Pre>{EXAMPLE_FLUX_INSTALL}</Layout.Pre>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionFluxViewTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionFluxViewContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_FLUX_VIEW}</Layout.Pre>
          </Layout.Content>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionFluxActionTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionFluxActionContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_FLUX_ACTION}</Layout.Pre>
          </Layout.Content>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionFluxDispatcherTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionFluxDispatcherContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_FLUX_DISPATCHER}</Layout.Pre>
          </Layout.Content>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionFluxStoreTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionFluxStoreContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_FLUX_STORE}</Layout.Pre>
          </Layout.Content>
        </Layout.Content>
      </Layout.Section>
      <Layout.Section>
        <Layout.SectionTitle>{productionTitle}</Layout.SectionTitle>
        <Layout.Content>{productionContent}</Layout.Content>
        <Layout.Item><ExamplFlux/></Layout.Item>
      </Layout.Section>
      <Layout.Section>
        <Layout.SectionTitle>{advancedTitle}</Layout.SectionTitle>
        <Layout.Content>{advancedContent}</Layout.Content>
        <Layout.Item><img src={ImageFlux_Server}/></Layout.Item>
        <Layout.Content>{advancedServerContent}</Layout.Content>
        <Layout.Item><ExamplFlux_Server/></Layout.Item>
      </Layout.Section>
      <Layout.Section>
        <Layout.SectionTitle>{noticeTitle}</Layout.SectionTitle>
        <Layout.Content>{noticeContent}</Layout.Content>
        <Layout.Content>
          <BTBList 
            STYLE={{
              'margin': 'auto',
              'padding': '15px',
              'width': 'calc(100% - 75px * 2)'
            }}
            listArr={NOTICE}
          />
        </Layout.Content>
      </Layout.Section>
      <Layout.Section>
        <Layout.BtnGroup>
          <Layout.Btn><ArticleRedirecter redirectTo={'BTB_ATCS'} /></Layout.Btn>
        </Layout.BtnGroup>
      </Layout.Section>
    </div>
  );
  return content;
};

export default Index;
