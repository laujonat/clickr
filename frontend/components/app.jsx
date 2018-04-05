import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import Splash from './splash/splash_container';
import DashBoardContainer from './session/dashboard_container';

const App = () => (
  <div className="app-container">
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/" component={Splash} />
        <Redirect to='/login' />
      </Switch>
  </div>
);

export default App;
