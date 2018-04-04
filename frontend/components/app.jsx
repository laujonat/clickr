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
    <div>
      <Route path="/" component={DashboardContainer} />
    </div>
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Redirect to='/login' />
      </Switch>
  </div>
);

export default App;


// MainPage:

// < NavBarContainer />
// < Switch />
//    < Route path='/photos' components={PhotoIndexContainer} />
//    < Route path='/groups' component={GroupIndexContainer} />
//    < Redirect to='/notfound' />
// < /Switch >
