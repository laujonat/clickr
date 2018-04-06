import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import NavBarContainer from './nav_bar_container';
import Welcome from './welcome';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import FeedContainer from '../feed/feed_container';
import UploadPhotoContainer from '../photos/upload_photo_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <NavBarContainer />
        <Switch>
          <Route path="/feed" component={FeedContainer} />
          <Route path="/upload" component={UploadPhotoContainer} />
        </Switch>
      </div>
    );
  }
}

export default Splash;

// Dashboard
// when route is /user, we will Switch into /user with a different nav bar
