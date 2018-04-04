import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonLayout() {
    if(this.props.currentUser) {
      {/* if current use is available, render an avatar */}
    } else {
      return(
        <ul className="right-btn-list">
          <li className="login-btn"><Link to='/login'>Log In</Link></li>
          <li className="signup-btn"><Link to='/signup'>Sign Up</Link></li>
        </ul>
     );
    }
  }


  render() {
    return (
      <div className="global-nav-bar">
        <ul className="left-btn-list">
          <li className="logo-img">clickr</li>
        </ul>
        {this.handleButtonLayout()}
      </div>
    );

  }

}

export default NavBar;
