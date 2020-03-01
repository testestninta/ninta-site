import React from 'react';
import { useDispatch } from 'react-redux';

import { authenticate } from '../../store/reducers/auth/actions';
import { setUserProfile } from '../../store/reducers/user/actions';

import api from '../../services/api';

const AuthPage = props => {
  const dispatch = useDispatch();
  const code = new URLSearchParams(props.location.search).get('code');

  if (code) {
    api
      .get(`/auth?code=${code}`)
      .then(response => {
        const { token, user } = response.data;
        if (token) {
          dispatch(authenticate({ token }));
          dispatch(setUserProfile({ user }));
          if (window.opener && window.opener.location) {
            window.opener.location.reload();
          } else if (window.opener) {
            window.opener.open('/dashboard');
          }
        }

        return window.close();
      })
      .catch(() => window.close());
  } else {
    if (!window.opener) props.history.push('/');
    else window.close();
  }

  return <h1>Logando...</h1>;
};

export default AuthPage;
