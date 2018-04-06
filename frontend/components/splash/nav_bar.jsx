import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './welcome';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDash() {
    if(this.props.currentUser) {
      return (
        <div className="session-global-nav-bar">
          <div className="session-inner-container">
            <ul className="session-left-btn-list">
              <li className="session-logo-img">clickr</li>
            </ul>

            <ul className="session-right-btn-list">
              <div className="uploadIcon">
                <Link to='/upload'>Upload</Link>
              </div>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <img className="session-avatar" src={this.props.currentUser.image_url}/>
                  </DropdownTrigger>
                  <DropdownContent>
                    <ul>
                      <li>
                        <a href="/#" onClick={this.props.logout}>Log Out</a>
                      </li>
                    </ul>
                  </DropdownContent>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
    );
  } else {
    return (
      <div className="no-session-container">
        <div className="global-nav-bar">
          <ul className="left-btn-list">
            <li className="logo-img">clickr</li>
          </ul>
          <ul className="right-btn-list">
            <li className="login-btn"><Link to='/login'>Log In</Link></li>
            <li className="signup-btn"><Link to='/signup'>Sign Up</Link></li>
          </ul>
        </div>
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

export default NavBar;

/*
<ul className="session-left-btn-list">
  <li className="session-logo-img">clickr</li>
</ul>
<ul className="session-right-btn-list">
  <button className="tempLogOutButton" onClick={this.props.logout}>Log Out</button>
  <li><img className="session-avatar" src={this.props.currentUser.image_url}/></li>
</ul>
*/
