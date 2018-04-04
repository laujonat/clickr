// REMOVE FILE, REPLACED WITH NAVBAR

import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign up</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div>
    <h2>Hi, { currentUser.username }!</h2>
    <button onClick={logout}>Log Out</button>
	</div>
);

const Session = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Session;
