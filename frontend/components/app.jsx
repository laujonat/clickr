import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
// import Splash from './splash/splash_container';
import NavBarContainer from './splash/nav_bar_container';
import FeedContainer from './feed/feed_container';
import UploadPhotoContainer from './photos/upload_photo_container';
import UploadNavContainer from './photos/upload_nav_container';

const App = () => (
  <div className="app-container">
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/upload" component={UploadNavContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>


    <Switch>
      <ProtectedRoute path="/feed" component={FeedContainer} />
      <ProtectedRoute path="/upload" component={UploadPhotoContainer} />
      <ProtectedRoute path="/" component={FeedContainer} />
    </Switch>
  </div>
);

export default App;
