import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="global-nav-bar">
        <ul className="left-btn-list">
          <li className="logo-img">clickr</li>
        </ul>
        <ul className="right-btn-list">
          <li className="login-btn"><Link to='/login'>Log In</Link></li>
          <li className="signup-btn"><Link to='/signup'>Sign Up</Link></li>
        </ul>
      </div>
    );

  }

}

export default NavBar;
