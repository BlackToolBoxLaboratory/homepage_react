import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={ROUTE.PACKAGES_POPOVER_BASIC} component={React.lazy(() => import('@src/routes/packages/popover/BasicContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_POPOVER_EXAMPLE_POSITION} component={React.lazy(() => import('@src/routes/packages/popover/ExamplePositionContainer.jsx'))}/>
        <Route path={ROUTE.PACKAGES_POPOVER_EXAMPLE_ALIGN} component={React.lazy(() => import('@src/routes/packages/popover/ExampleAlignContainer.jsx'))}/>
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;