import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={ROUTE.PACKAGES_TABLE_BASIC} component={React.lazy(() => import('@src/routes/packages/table/BasicContainer.jsx'))}/>
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;