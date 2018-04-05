import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  let store;
  // console.log(window.currentUser);
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>, root);
});


/*
  TODO:
  - By 4/4/18
    - Push up to heroku and tag AJ into the github issues
    - See if you can meet up with him one on one

  - Read up on the css questions
  - Understand what is going on with React Router
  - Get started with the photo container and how you would be distributing the site



*/
