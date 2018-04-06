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

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <NavBarContainer />
        <Switch>
          <ProtectedRoute path="/feed" component={FeedContainer} />
        </Switch>
      </div>
    );
  }
}

export default Splash;

// Dashboard
// when route is /user, we will Switch into /user with a different nav bar
