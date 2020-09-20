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
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
