import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_FORM_BASIC_INPUT}
          component={React.lazy(() => import('@src/routes/packages/form/BasicInputContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_BASIC_SELECT}
          component={React.lazy(() => import('@src/routes/packages/form/BasicSelectContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_BASIC_RADIO}
          component={React.lazy(() => import('@src/routes/packages/form/BasicRadioContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_BASIC_CHECKBOX}
          component={React.lazy(() => import('@src/routes/packages/form/BasicCheckboxContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_BASIC_TEXTAREA}
          component={React.lazy(() => import('@src/routes/packages/form/BasicTextareaContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_EXAMPLE_INPUT}
          component={React.lazy(() => import('@src/routes/packages/form/ExampleInputContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_EXAMPLE_SELECT}
          component={React.lazy(() => import('@src/routes/packages/form/ExampleSelectContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_EXAMPLE_RADIO}
          component={React.lazy(() => import('@src/routes/packages/form/ExampleRadioContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_EXAMPLE_CHECKBOX}
          component={React.lazy(() => import('@src/routes/packages/form/ExampleCheckboxContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FORM_EXAMPLE_TEXTAREA}
          component={React.lazy(() => import('@src/routes/packages/form/ExampleTextareaContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
