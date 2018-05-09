import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllTags } from './actions/tag_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchAllTags = fetchAllTags;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>, root);
});
