import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar_container';
import Welcome from './welcome';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="splash-container">
        <NavBarContainer />

      </div>
    );
  }

}

export default Splash;
