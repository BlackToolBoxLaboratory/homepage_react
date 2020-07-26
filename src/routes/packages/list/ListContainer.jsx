import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_LIST_BASIC}
          component={React.lazy(() => import('@src/routes/packages/list/BasicContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_LIST_EXAMPLE_LIST}
          component={React.lazy(() => import('@src/routes/packages/list/ExampleListContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_LIST_EXAMPLE_MENU}
          component={React.lazy(() => import('@src/routes/packages/list/ExampleMenuContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_LIST_EXAMPLE_STYLE}
          component={React.lazy(() => import('@src/routes/packages/list/ExampleStyleContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_LIST_EXAMPLE_SLOT}
          component={React.lazy(() => import('@src/routes/packages/list/ExampleSlotContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
