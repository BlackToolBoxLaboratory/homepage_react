import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_BUTTON_BASIC_BUTTON}
          component={React.lazy(() => import('@src/routes/packages/button/BasicButtonContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON_BASIC_GROUP}
          component={React.lazy(() => import('@src/routes/packages/button/BasicGroupContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON_EXAMPLE_BUTTON}
          component={React.lazy(() => import('@src/routes/packages/button/ExampleButtonContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON_EXAMPLE_GROUP}
          component={React.lazy(() => import('@src/routes/packages/button/ExampleGroupContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON_EXAMPLE_PAGINATION}
          component={React.lazy(() => import('@src/routes/packages/button/ExamplePaginationContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON_EXAMPLE_STYLE}
          component={React.lazy(() => import('@src/routes/packages/button/ExampleStyleContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON_EXAMPLE_SLOT}
          component={React.lazy(() => import('@src/routes/packages/button/ExampleSlotContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
