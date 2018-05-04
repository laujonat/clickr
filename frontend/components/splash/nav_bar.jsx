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
                    <section>
                      <p>
                        Thank you for visting clickr, a Flickr clone! This project was made entirely using React/Redux on the front end,
                        with Ruby on Rails with a PostgreSQL database on the back end.
                      </p>
                    </section>
                    <ul className="dropdown-logout">
                      <li>
                        <a href="http://github.com/laujonat"><img className="github-img" src="https://i.imgur.com/J37akex.png"/></a>
                        <a href="http://linkedin.com/in/jonathanhlau"><img className="linkedin-img" src="https://i.imgur.com/o7Boarq.png"/></a>
                      </li>
                      <li>
                        <button className="logout-dropdown-btn" onClick={this.props.logout}>Log Out</button>
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
