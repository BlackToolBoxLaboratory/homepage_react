import React, { Component } from 'react';
import FA from 'react-fontawesome';

import routeList from '../../assets/routeList.js';
import hashHistory from '../../assets/history.js';

import ExampleBasic from '../../example/articleComponent_PnC/example/app.js';
import ExampleComponent_PnC from '../../example/articleComponent_PnC/exampleComponent_PnC/app.js';

import ImageExample from '../../images/articleComponent_PnC_example.png';
import ImageExample_PnC from '../../images/articleComponent_PnC.png';

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

class Index extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Component: Presentational and Container</h1>
            <span>Conceptual Introduction and simple example</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>INTRODUCTION</div>
          <div className='content'>
            <span>There is a optional thinking in design webside codebase structure(at least for me). The component could be distinguished into two concepts: <a target='_blank' href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'>{`presentational and container`}<FA name='external-link' fixedWidth/></a>. There is some articles about them already. But some people may get confuse to know or to use. But here just use a simple angle to intruduce them as when I learn by myself. Hope it is useful for you.</span>
          </div>
          <div className='content'>
            <h3>Example</h3>
            <div className='content'>
              <span>The following shown is a user list basically same as the example of Flux introduction, But I made a little change to draw the data out to imitate fetching data from server API.</span>
            </div>
            <div className='content-example'>
              <ExampleBasic/>
            </div>
            <div className='content'>
              <span>To show the User List. We just need to refer the component to where we want.</span>  
              <div className='content-image'>
                <img src={ImageExample}/>
              </div>
              <span>Comparing my <a target='_blank' href='https://github.com/BlackToolBoxLaboratory/blacktbox-demo/tree/master/src/assets/articleComponent_PnC/example'>{`Example`}<FA name='external-link' fixedWidth/></a>, I simplify the source code for more focus on the construction and add some notation, like this:</span>
              <pre className='content-pre'>{EXAMPLE_BASIC_ALGORITHM}</pre>
            </div>
          </div>
          <div className='content'>
            <h3>Presentational and Container</h3>
            <div className='content'>
              <span>In original, we only create a component to implement the User List. And now, we will separate the component into two part called presentational(presentational component in short) and container. Here is an easy rule to distinguish them by 'Where the data they used is fetched from?' The data presentational used is came from other component(props inherit, imported ... etc). The other data container used is the 'Store'. And mostly the store is fetched from server API. And if your components do not need state and life cycle. There may be more appropriate to use functional stateless component to create(Not neccessary move, depend on case). And with the following picture, you will see the source code of example about presentational and container individually. And in our case , the component map will be:</span>
            </div>
            <div className='content-image'>
              <img src={ImageExample_PnC}/>
            </div>
            <div className='content'>
              <h3>Presentational: main</h3>
              <div className='content'>
                <span>To render the outline the component. Cause it does not need render with data, we use stateless functino to create.</span>
                <pre className='content-pre'>{EXAMPLE_COMPONENT_PRESENTATIONAL_MAIN}</pre>
              </div>
              <h3>Presentational: add user</h3>
              <div className='content'>
                <span>To render component to add user to list. Cause I want to use 'ref' work here, I choose stateful function here. You could use stateless function with HTML DOM as well.</span>
                <pre className='content-pre'>{EXAMPLE_COMPONENT_PRESENTATIONAL_ADDUSER}</pre>
              </div>
              <h3>Presentational: delete user</h3>
              <div className='content'>
                <span>To render component to add user to list. Here is a stateless function.</span>
                <pre className='content-pre'>{EXAMPLE_COMPONENT_PRESENTATIONAL_DELETEUSER}</pre>
              </div>
              <h3>Container</h3>
              <div className='content'>
                <span>To render the component with data.</span>
                <pre className='content-pre'>{EXAMPLE_COMPONENT_CONTAINER}</pre>
              </div>
            </div>
          </div>
        </div>
        <div className='context'>
          <div className='title'>PRODUCTION</div>
          <div className='content'>
            <span>Here we go! This is the example separate component into Presentational component and Container.</span>
          </div>
          <div className='content-example'>
            <ExampleComponent_PnC/>
          </div>
        </div>
        <div className='context'>
          <div className='title'>NOTICE</div>
          <div className='content'>
            <span>I use the Presentational and Containter thinking first time when I write this introduction. In my experience, the design thinking is depend on how do you disintegrate your layout into components. There is unnecessary to strictly separate to Presentational and Containter. You cloud keep some Presentational in Container for some kind of convenience. Same as the <a target='_blank' href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'>{`original article`}<FA name='external-link' fixedWidth/></a> mentioned: "the presentational components and the containers is not a technical one. Rather, it is a distinction in their purpose." Clear Definition is the most important step in design.</span>
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
