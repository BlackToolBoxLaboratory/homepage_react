import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={ROUTE.PACKAGES_LIST}>
        <Redirect to={ROUTE.PACKAGES_LIST_BASIC}/>
      </Route>
      <Route exact path={ROUTE.PACKAGES_TABLE}>
        <Redirect to={ROUTE.PACKAGES_TABLE_BASIC}/>
      </Route>
      <Switch>
        <Route path={ROUTE.PACKAGES_LIST} component={React.lazy(() => import('@src/routes/packages/list/ListContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_TABLE} component={React.lazy(() => import('@src/routes/packages/table/TableContainer.jsx'))}/>
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;