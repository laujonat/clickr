import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // window.signup = APIUtil.signup;
  // window.login = APIUtil.login;
  // window.logout = APIUtil.logout;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;



  const root = document.getElementById('content');
  ReactDOM.render(<Root/>, root);
});
