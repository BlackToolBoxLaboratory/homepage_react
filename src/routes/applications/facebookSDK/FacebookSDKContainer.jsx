import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const FacebookSDKContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.APPLICATIONS_FACEBOOK_SDK_BASIC}
          component={React.lazy(() => import('@src/routes/applications/facebookSDK/BasicContainer.jsx'))}
        />
        <Route
          path={ROUTE.APPLICATIONS_FACEBOOK_SDK_API}
          component={React.lazy(() => import('@src/routes/applications/facebookSDK/APIsContainer.jsx'))}
        />
        <Route
          path={ROUTE.APPLICATIONS_FACEBOOK_SDK_COMPONENTS}
          component={React.lazy(() => import('@src/routes/applications/facebookSDK/ComponentsContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default FacebookSDKContaier;
