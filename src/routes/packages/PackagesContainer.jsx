import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTE } from '@src/assets/definitions/constants';

const PackagesContaier = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={ROUTE.PACKAGES_LIST}>
        <Redirect to={ROUTE.PACKAGES_LIST_BASIC} />
      </Route>
      <Route exact path={ROUTE.PACKAGES_TABLE}>
        <Redirect to={ROUTE.PACKAGES_TABLE_BASIC} />
      </Route>
      <Route exact path={ROUTE.PACKAGES_POPOVER}>
        <Redirect to={ROUTE.PACKAGES_POPOVER_BASIC} />
      </Route>
      <Route exact path={ROUTE.PACKAGES_BUTTON}>
        <Redirect to={ROUTE.PACKAGES_BUTTON_BASIC_BUTTON} />
      </Route>
      <Route exact path={ROUTE.PACKAGES_BUTTON_BASIC}>
        <Redirect to={ROUTE.PACKAGES_BUTTON_BASIC_BUTTON} />
      </Route>
      <Route exact path={ROUTE.PACKAGES_MESSAGE}>
        <Redirect to={ROUTE.PACKAGES_MESSAGE_BASIC_MESSAGE} />
      </Route>
      <Route exact path={ROUTE.PACKAGES_MESSAGE_BASIC}>
        <Redirect to={ROUTE.PACKAGES_MESSAGE_BASIC_MESSAGE} />
      </Route>
      <Switch>
        <Route
          path={ROUTE.PACKAGES_LIST}
          component={React.lazy(() => import('@src/routes/packages/list/ListContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_TABLE}
          component={React.lazy(() => import('@src/routes/packages/table/TableContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_POPOVER}
          component={React.lazy(() => import('@src/routes/packages/popover/PopoverContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_BUTTON}
          component={React.lazy(() => import('@src/routes/packages/button/ButtonContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_MESSAGE}
          component={React.lazy(() => import('@src/routes/packages/message/MessageContainer.jsx'))}
        />
        <Route
          path={ROUTE.PACKAGES_FOLDER}
          component={React.lazy(() => import('@src/routes/packages/folder/FolderContainer.jsx'))}
        />
      </Switch>
    </Suspense>
  );
};

export default PackagesContaier;
