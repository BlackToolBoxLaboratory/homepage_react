import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={ROUTE.PACKAGES_TABLE_BASIC} component={React.lazy(() => import('@src/routes/packages/table/BasicContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_TABLE_EXAMPLE_LIST} component={React.lazy(() => import('@src/routes/packages/table/ExampleListContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_TABLE_EXAMPLE_INFO} component={React.lazy(() => import('@src/routes/packages/table/ExampleInfoContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_TABLE_EXAMPLE_COMPARE} component={React.lazy(() => import('@src/routes/packages/table/ExampleCompareContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_TABLE_EXAMPLE_STYLE} component={React.lazy(() => import('@src/routes/packages/table/ExampleStyleContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_TABLE_EXAMPLE_SLOT} component={React.lazy(() => import('@src/routes/packages/table/ExampleSlotContainer.jsx'))}/>
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;