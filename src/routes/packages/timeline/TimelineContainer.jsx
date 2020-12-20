import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_TIMELINE_BASIC}
          component={React.lazy(() => import('@src/routes/packages/timeline/BasicContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_TIMELINE_EXAMPLE_POSITION}
          component={React.lazy(() => import('@src/routes/packages/timeline/ExamplePositionContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_TIMELINE_EXAMPLE_ALIGN}
          component={React.lazy(() => import('@src/routes/packages/timeline/ExampleAlignContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
