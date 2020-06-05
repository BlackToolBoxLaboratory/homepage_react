import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';
import Layout from '@src/components/layout/Layout.jsx';

const HomeContainer = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Redirect exact from={ROUTE.HOME} to={ROUTE.ABOUT}/>
        <Switch>
          <Route path={ROUTE.ABOUT} component={React.lazy(() => import('@src/routes/AboutContainer.jsx'))}/>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default HomeContainer;