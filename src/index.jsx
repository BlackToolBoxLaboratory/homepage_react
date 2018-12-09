import React from 'react';
import { render } from 'react-dom';
// import { HashRouter, Route } from 'react-router-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store  from './store.js';


// import 'css/index.less';
// import 'components/fontawesomeLibrary.js';
// import Dispatcher from 'assets/dispatcher.js';

import Main from './routes/Main.jsx';
import Refactor from './routes/Refactor.jsx';

const Router = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path='/v2' component={Main} />
          <Route path='/' component={Refactor} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

render((<Router />), document.getElementById('main'));