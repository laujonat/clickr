import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class PhotoShowNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // need logic to show avatar only if currentUser exists
    // Otherwise show sign up button
    return (
      <div className="session-global-nav-bar-dark">
        <div className="session-inner-container">
          <ul className="session-left-btn-list">
            <li className="session-logo-img"><Link to="/feed">clickr</Link></li>
            <li className="nav-you-link"><Link to={`/user/${this.props.currentUser.id}`}>You</Link></li>
          </ul>
          <ul className="session-right-btn-list">
            <Link to='/upload'>
              <div className="icon-upload"></div>
            </Link>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <img className="session-avatar" src={this.props.currentUser.user_profile_img}/>
                </DropdownTrigger>
                <DropdownContent>
                  <ul>
                    <li>
                      <a href="/#">Log Out</a>
                    </li>
                  </ul>
                </DropdownContent>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoShowNav;
