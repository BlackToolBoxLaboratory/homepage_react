import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_MESSAGE_BASIC_MESSAGE}
          component={React.lazy(() => import('@src/routes/packages/message/BasicMessageContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_MESSAGE_BASIC_NOTICE}
          component={React.lazy(() => import('@src/routes/packages/message/BasicNoticeContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_MESSAGE_EXAMPLE_MESSAGE}
          component={React.lazy(() => import('@src/routes/packages/message/ExampleMessageContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_MESSAGE_EXAMPLE_NOTICE}
          component={React.lazy(() => import('@src/routes/packages/message/ExampleNoticeContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
