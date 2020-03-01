import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './router';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <section className="main-container">
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </section>
    </PersistGate>
  </Provider>
);

export default App;
