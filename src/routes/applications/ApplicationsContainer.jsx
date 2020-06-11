import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTE from '@src/assets/definitions/routeMap.js';

const ApplicationsContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={ROUTE.APPLICATIONS_LANGUAGES} component={React.lazy(() => import('@src/routes/applications/LanguagesContainer.jsx'))}/>
        <Route path={ROUTE.APPLICATIONS_VALIDATOR} component={React.lazy(() => import('@src/routes/applications/ValidatorContainer.jsx'))}/>
      </Switch>
    </Suspense>
  );
};

export default ApplicationsContaier;