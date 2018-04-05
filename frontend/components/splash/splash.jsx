import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBar from './nav_bar';
import Welcome from './welcome';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
          <NavBar
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />

          <Welcome />
          {/* switch router will go here!*/}
      </div>
    );
  }

}

export default Splash;
