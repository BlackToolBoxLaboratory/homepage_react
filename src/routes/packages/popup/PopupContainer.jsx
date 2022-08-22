import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_POPUP_BASIC}
          component={React.lazy(() => import('@src/routes/packages/popup/BasicContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_POPUP_EXAMPLE}
          component={React.lazy(() => import('@src/routes/packages/popup/ExampleContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
