import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';
import Layout from '@src/components/layout/Layout.jsx';

const HomeContainer = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path={ROUTE.PACKAGES}>
          <Redirect to={ROUTE.PACKAGES_LIST}/>
        </Route>
        <Route exact path={ROUTE.APPLICATIONS}>
          <Redirect to={ROUTE.APPLICATIONS_LANGUAGES}/>
        </Route>
        <Switch>
          <Route path={ROUTE.ABOUT} component={React.lazy(() => import('@src/routes/AboutContainer.jsx'))}/>
          <Route path={ROUTE.PACKAGES} component={React.lazy(() => import('@src/routes/packages/PackagesContainer.jsx'))}/>
          <Route path={ROUTE.APPLICATIONS} component={React.lazy(() => import('@src/routes/applications/ApplicationsContainer.jsx'))}/>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default HomeContainer;