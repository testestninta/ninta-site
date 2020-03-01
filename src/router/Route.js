import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../services/auth';
import { store } from '../store';

import Header from '../components/Header';
import Footer from '../components/Footer';

const RouteWrapper = ({ component: Component, isPrivate = false, ...rest }) => {
  const { token } = store.getState().auth;

  if (!(token && auth.isAuthenticated(token)) && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header {...props} />
          <Component {...props} />
          <Footer />
        </>
      )}
    />
  );
};

export default RouteWrapper;
