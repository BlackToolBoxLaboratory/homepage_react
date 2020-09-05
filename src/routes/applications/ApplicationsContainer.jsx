import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const ApplicationsContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={ROUTE.APPLICATIONS_FACEBOOK_SDK}>
        <Redirect to={ROUTE.APPLICATIONS_FACEBOOK_SDK_BASIC} />
      </Route>
      <Switch>
        <Route
          path={ROUTE.APPLICATIONS_FACEBOOK_SDK}
          component={React.lazy(() => import('@src/routes/applications/facebookSDK/FacebookSDKContainer.jsx'))}
        />
        <Route
          path={ROUTE.APPLICATIONS_LANGUAGES}
          component={React.lazy(() => import('@src/routes/applications/LanguagesContainer.jsx'))}
        />
        <Route
          path={ROUTE.APPLICATIONS_VALIDATOR}
          component={React.lazy(() => import('@src/routes/applications/ValidatorContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default ApplicationsContaier;
