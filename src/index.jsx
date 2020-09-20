import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MessageProvider } from '@blacktoolbox/react-message';
import BTBComponentFolder from '@blacktoolbox/react-component-folder';

import '@src/plugins/btblab-react-fb-sdk.js';
import '@src/plugins/btblab-react-list.js';
import '@src/plugins/btblab-react-table.js';
import '@src/plugins/btblab-react-popover.js';
import '@src/plugins/btblab-react-button.js';
import '@src/plugins/btblab-react-message.js';
import '@src/plugins/react-fontawesome.js';
import '@src/assets/styles/index.less';
import { ROUTE } from '@src/assets/definitions/constants';

import { store, persistor } from '@src/stores/index.js';

const App = () => {
  /* eslint-disable react/jsx-key */
  const componentList = [
    <Provider store={store} />,
    <PersistGate persistor={persistor} />,
    <HashRouter />,
    <MessageProvider closeable />,
  ];
  /* eslint-enable react/jsx-key */
  return (
    <BTBComponentFolder components={componentList}>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path={ROUTE.HOME}>
          <Redirect to={ROUTE.ABOUT} />
        </Route>
        <Switch>
          <Route path={ROUTE.HOME} component={React.lazy(() => import('@src/routes/HomeContainer.jsx'))} />
        </Switch>
      </Suspense>
    </BTBComponentFolder>
  );
};

render(<App />, document.getElementById('app'));
