import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBar from './nav_bar';
import SessionNavBar from './session_nav';
import Welcome from './welcome';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDash() {
    if(this.props.currentUser) {
      return (
        <div className="session-container">
          <SessionNavBar
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        </div>
      );
    } else {
      return (
        <div className="splash-container">
          <NavBar
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
          <Welcome />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderDash()}
      </div>
    );
  }

}

export default Splash;
