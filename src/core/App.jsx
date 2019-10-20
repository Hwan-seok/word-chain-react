import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import history from 'utils/history';
import {Provider} from 'react-redux';
import configureStore from 'store/configStore';
import {PersistGate} from 'redux-persist/integration/react';

import {AppTitle, AppHeader, AppFooter} from '../layouts';
import Routes from './Routes';

const initialState = {};
const {store, persistor} = configureStore(initialState, history);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <AppTitle></AppTitle>
          <AppHeader></AppHeader>
          <AppFooter></AppFooter>
          <Routes></Routes>
        </BrowserRouter>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;