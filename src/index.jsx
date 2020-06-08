import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import '@src/plugins/btblab-react-list.js';
import '@src/plugins/react-fontawesome.js';
import '@src/assets/styles/index.less';
import ROUTE from '@src/assets/definitions/routeMap.js';

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={ROUTE.HOME}>
            <Redirect to={ROUTE.ABOUT}/>
          </Route>
          <Route path={ROUTE.HOME} component={React.lazy(() => import('@src/routes/HomeContainer.jsx'))}/>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

render((<App />), document.getElementById('app'));
