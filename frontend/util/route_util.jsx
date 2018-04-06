import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});
// if user is already logged in, redirect to feed
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
      path={path}
      render={props => (
        loggedIn ? <Redirect to='/feed' /> : <Component {...props}/>
      )}
  />
);
// routes can only be accessible if user is logged in 
const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
      path={path}
      render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to ="/login" />
      )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
