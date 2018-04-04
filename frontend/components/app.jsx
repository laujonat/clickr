import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import DashboardContainer from './session/dashboard_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';

const App = () => (
  <div>
    <h1>clickr</h1>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={DashboardContainer} />
      </Switch>
  </div>
);

export default App;
