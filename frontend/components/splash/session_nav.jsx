import React from 'react';
import { Link } from 'react-router-dom';

class SessionNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="session-global-nav-bar">
        <div className="session-inner-container">
          <ul className="session-left-btn-list">
            <li className="session-logo-img">clickr</li>
          </ul>
          <ul className="session-right-btn-list">
            <button className="tempLogOutButton" onClick={this.props.logout}>Log Out</button>
            <li><img className="session-avatar" src={this.props.currentUser.image_url}/></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default SessionNavBar;
