import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.signup = APIUtil.signup;
  const root = document.getElementById('content');
  ReactDOM.render(<h1>success</h1>, root);
});
