import React from 'react';
import FA from 'react-fontawesome';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-menu `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-menu'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `Advanced application with Blacktbox-menu.`;

const redirectTitle = `REDIRECT`;
const redirectContent = (<span>{`Here, we talk about "How to redirect with Blacktbox-menu". And it will work with `}<a target='_blank' href='https://github.com/ReactTraining/react-router'>{`React-router`}<FA name='external-link' fixedWidth/></a>{`. It is quite enough, if we only need to redirect by clicking menu. However sometimes we need to redirect after function finished or depend on its result. So, we choose a general way to complete the menu system. As we know, there are big different bwteen 2.x/3.x and 4.x. We separate to two part for 2.x/3.x and 4.x. Besides, the way with 4.x is used in our Homepage(Demonstration).`}</span>);

const reactRouterVersion23Title = `2.x/3.x`;
const reactRouterVersion23RouterListContent = `For 2.x/3.x, we need to build a router list:`;
const reactRouterVersion23RedirectContent = `And then, we can use <Link> or hashHistory.push to do redirect.`;
const reactRouterVersion4Title = `4.x`;
const reactRouterVersion4RouterListContent = `Same as 4.x, we need to build a router list, too:`;
const reactRouterVersion4RedirectContent = (<span>{`And then, we can use <Link> to do redirect. However if we need to use something like hashHistory.push to do redirect. You can use withRouter. But we prefer to build our history to use. In that way, we need to install `}<a target='_blank' href='https://www.npmjs.com/package/history'>{`History`}<FA name='external-link' fixedWidth/></a>{` additionally.`}</span>);
const reactRouterVersion4CreateHistoryContent = `Then we need to have a component to create our history.`;
const reactRouterVersion4HistoryPushContent = `Finally, we can use our history.push to do redirect. Also we can add the history.push to our Blacktbox-menu's parameter: itemOnClickFn with a route list to implement the redirection.`;

const REACTROUTER_23_ROUTER = 
`<Router history={hashHistory}>
  <Route path='/' component={Index}>
    ...
  <Route>
</Router>`;
const REACTROUTER_23_REDIRECT = 
`<Link to={...}>

hashHistory.push(...)`;
const REACTROUTER_4_ROUTER = 
`<Switch>
  <Route path='/' component={Index}>
    ...
  <Route>
</Switch>`;
const HISTORY_INSTALL =
`npm install --save history`;
const HISTORY_CREATE =
`import { createHashHistory } from 'history';
export default createHashHistory();`;
const REACTROUTER_4_REDIRECT = 
`// import our history.
import history from './history.js';

// work with Blacktbox-menu.
<BTBMenu 
  menuArr={menuList}
  itemOnClickFn={(infoObj)=>{this._itemOnClickFn(infoObj);}}
/>

// _itemOnClickFn.
_itemOnClickFn (infoObj) {
  // infoObj is whole information catched from menuArr about which item clicked. The routeList is our router list.
  let path = routeList[infoObj.index];
  if(path)
  {
    // redirect with history.
    history.push(path);
  }
};
`;

const Adavnce = () => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-advance'>
      <AL.MainTitle>{mainTitle}</AL.MainTitle>
      <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
      <AL.Section>
        <AL.SectionTitle>{redirectTitle}</AL.SectionTitle>
        <AL.Content>{redirectContent}</AL.Content>
        <AL.Content>
          <AL.SectionSubtitle>{reactRouterVersion23Title}</AL.SectionSubtitle>
          <AL.Content>{reactRouterVersion23RouterListContent}</AL.Content>
          <AL.Pre>{REACTROUTER_23_ROUTER}</AL.Pre>
          <AL.Content>{reactRouterVersion23RedirectContent}</AL.Content>
          <AL.Pre>{REACTROUTER_23_REDIRECT}</AL.Pre>
        </AL.Content>
        <AL.Content>
          <AL.SectionSubtitle>{reactRouterVersion4Title}</AL.SectionSubtitle>
          <AL.Content>{reactRouterVersion4RouterListContent}</AL.Content>
          <AL.Pre>{REACTROUTER_4_ROUTER}</AL.Pre>
          <AL.Content>{reactRouterVersion4RedirectContent}</AL.Content>
          <AL.Pre>{HISTORY_INSTALL}</AL.Pre>
          <AL.Content>{reactRouterVersion4CreateHistoryContent}</AL.Content>
          <AL.Pre>{HISTORY_CREATE}</AL.Pre>
          <AL.Content>{reactRouterVersion4HistoryPushContent}</AL.Content>
          <AL.Pre>{REACTROUTER_4_REDIRECT}</AL.Pre>
        </AL.Content>
      </AL.Section>
    </div>
  );
  return content;
};

export default Adavnce;
