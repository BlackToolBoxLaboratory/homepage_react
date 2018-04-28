import React, { Component } from 'react';
import FA from 'react-fontawesome';

import ExampleBasic from '../../example/articleComponent_PnC/example/app.js';
import ExampleComponent_PnC from '../../example/articleComponent_PnC/exampleComponent_PnC/app.js';

import ImageExample from '../../images/articleComponent_PnC_example.png';
import ImageExample_PnC from '../../images/articleComponent_PnC.png';

import Layout from '../../components/layout.js';
import ArticleRedirecter from '../../components/articleRedirecter.js';

const mainTitle = `Component: Presentational and Container`;
const mainDescriptionStr = `Conceptual Introduction and simple example`;

const introductionTitle = `INTRODUCTION`;
const introductionContent = (<span>There is a optional thinking in design webside codebase structure(at least for me). The component could be distinguished into two concepts: <a target='_blank' href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'>{`presentational and container`}<FA name='external-link' fixedWidth/></a>. There is some articles about them already. But some people may get confuse to know or to use. But here just use a simple angle to intruduce them as when I learn by myself. Hope it is useful for you.</span>);

const introductionExampleTitle = `Example`;
const introductionExampleContent = `The following shown is a user list basically same as the example of Flux introduction, But I made a little change to draw the data out to imitate fetching data from server API.`;
const introductionExampleImageDescription = `To show the User List. We just need to refer the component to where we want.`;
const introductionExampleAlgorithmDescription = (<span>Comparing my <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleComponent_PnC/example'>{`Example`}<FA name='external-link' fixedWidth/></a>, I simplify the source code for more focus on the construction and add some notation, like this:</span>);

const introductionComponentTitle = `Presentational and Container`;
const introductionComponentContent = `In original, we only create a component to implement the User List. And now, we will separate the component into two part called presentational(presentational component in short) and container. Here is an easy rule to distinguish them by 'Where the data they used is fetched from?' The data presentational used is came from other component(props inherit, imported ... etc). The other data container used is the 'Store'. And mostly the store is fetched from server API. And if your components do not need state and life cycle. There may be more appropriate to use functional stateless component to create(Not neccessary move, depend on case). And with the following picture, you will see the source code of example about presentational and container individually. And in our case , the component map will be:`;

const introductionComponentMainTitle = `Presentational: main`;
const introductionComponentMainContent = `To render the outline the component. Cause it does not need render with data, we use stateless functino to create.`;
const introductionComponentAddUserTitle = `Presentational: add user`;
const introductionComponentAddUserContent = `To render component to add user to list. Cause I want to use 'ref' work here, I choose stateful function here. You could use stateless function with HTML DOM as well.`;
const introductionComponentDeleteUserTitle = `Presentational: delete user`;
const introductionComponentDeleteUserContent = `To render component to add user to list. Here is a stateless function.`;
const introductionComponentContainerTitle = `Container`;
const introductionComponentContainerContent = `To render the component with data.`;

const productionTitle = `PRODUCTION`;
const productionContent = (<span>Here we go! This is the example separate component into Presentational component and Container. And the source code is <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/example/articleComponent_PnC/exampleComponent_PnC'>{`here`}<FA name='external-link' fixedWidth/></a></span>);

const noticeTitle = `NOTICE`;
const noticeContent = (<span>I use the Presentational and Containter thinking first time when I write this introduction. In my experience, the design thinking is depend on how do you disintegrate your layout into components. There is unnecessary to strictly separate to Presentational and Containter. You cloud keep some Presentational in Container for some kind of convenience. Same as the <a target='_blank' href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'>{`original article`}<FA name='external-link' fixedWidth/></a> mentioned: "the presentational components and the containers is not a technical one. Rather, it is a distinction in their purpose." Clear Definition is the most important step in design.</span>);

const EXAMPLE_BASIC_ALGORITHM = 
`<!-- Require or Import what you need -->

<!-- Start: Define the component of User list -->
class Example extends Component {
  /* [Presentational] [Container]: render presentational and container */
  render () {...};

  fetchData () {
    /* [Container]: fetch data and used by container */
  };
};
<!-- End: Define the component of User list -->

<!-- Export component -->
`;
const EXAMPLE_COMPONENT_PRESENTATIONAL_MAIN = 
`<!-- Require or Import what you need -->
import React from 'react'; /* must be */

/* container */
import UserList from '../containers/exampleContainer.js';

const App = () => {
  let content = [];
  /* [Presentational]: render, here include container */
  content.push(...);
  return content;
};

<!-- Export component -->
`;
const EXAMPLE_COMPONENT_PRESENTATIONAL_ADDUSER = 
`<!-- Require or Import what you need -->

import ServerAPI from '../serverAPIs/serverAPI.js';

class AddUser extends Component {
  constructor (props) {
    super(props);
    this.env = {
      'dataCounter': 0,
      'dataLimit': 0,
      'refreshHandler': function(){}
    };
  };
  componentWillUpdate (nextProps, nextState) {
    this.updateData(nextProps);
  };
  render () {
    let content = [];
    /* [Presentational]: render */
    content.push(...);
    return content;
  };

  updateData (props) {...};

  _addHandler () {...};
};

<!-- Export component -->
`;
const EXAMPLE_COMPONENT_PRESENTATIONAL_DELETEUSER = 
`<!-- Require or Import what you need -->

import ServerAPI from '../serverAPIs/serverAPI.js';

const DeleteUser = (props) => {
  const _deleteHandler = () => {...};
  let content = [];
  /* [Presentational]: render */
  content.push(...);
  return content;
};

<!-- Export component -->
`;
const EXAMPLE_COMPONENT_CONTAINER = 
`<!-- Require or Import what you need -->

import ServerAPI from '../serverAPIs/serverAPI.js';

import AddUser from '../components/exampleComponent_addUser.js';
import DeleteUser from '../components/exampleComponent_deleteUser.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.dataList = new Array();
  };
  componentDidMount () {
    this.fetchData();
  };
  render () {
    let content = [];
    /* [Container]: render, here include AddUser and DeleteUser */
    content.push(...);
    return content;
  };

  /* [serverAPI]: fetch data from server */
  fetchData () {...};

  _refreshHandler() {...};
};

<!-- Export component -->
`;

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
          <Layout.Content>{introductionExampleImageDescription}</Layout.Content>
          <Layout.Item><img src={ImageExample}/></Layout.Item>
          <Layout.Content>{introductionExampleAlgorithmDescription}</Layout.Content>
          <Layout.Pre>{EXAMPLE_BASIC_ALGORITHM}</Layout.Pre>
        </Layout.Content>
        <Layout.Content>
          <Layout.SectionSubtitle>{introductionComponentTitle}</Layout.SectionSubtitle>
          <Layout.Content>{introductionComponentContent}</Layout.Content>
          <Layout.Item><img src={ImageExample_PnC}/></Layout.Item>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionComponentMainTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionComponentMainContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_COMPONENT_PRESENTATIONAL_MAIN}</Layout.Pre>
          </Layout.Content>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionComponentAddUserTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionComponentAddUserContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_COMPONENT_PRESENTATIONAL_ADDUSER}</Layout.Pre>
          </Layout.Content>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionComponentDeleteUserTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionComponentDeleteUserContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_COMPONENT_PRESENTATIONAL_DELETEUSER}</Layout.Pre>
          </Layout.Content>
          <Layout.Content>
            <Layout.SectionSubtitle>{introductionComponentContainerTitle}</Layout.SectionSubtitle>
            <Layout.Content>{introductionComponentContainerContent}</Layout.Content>
            <Layout.Pre>{EXAMPLE_COMPONENT_CONTAINER}</Layout.Pre>
          </Layout.Content>
        </Layout.Content>
      </Layout.Section>
      <Layout.Section>
        <Layout.SectionTitle>{productionTitle}</Layout.SectionTitle>
        <Layout.Content>{productionContent}</Layout.Content>
        <Layout.Item><ExampleComponent_PnC/></Layout.Item>
      </Layout.Section>
      <Layout.Section>
        <Layout.SectionTitle>{noticeTitle}</Layout.SectionTitle>
        <Layout.Content>{noticeContent}</Layout.Content>
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
