import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class PhotoShowNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let makeYouLink;
    let imgAvatar;
    if (this.props.currentUser) {
      makeYouLink = <li className="nav-you-link"><Link to={`/user/${this.props.currentUser.id}`}>You</Link></li>;
      imgAvatar = <img className="session-avatar" src={this.props.currentUser.user_profile_img}/>;
    } else {
      makeYouLink = "";
      imgAvatar = "";
    }

    return (
      <div className="session-global-nav-bar-dark">
        <div className="session-inner-container">
          <ul className="session-left-btn-list">
            <li className="session-logo-img"><Link to="/feed">clickr</Link></li>
            {makeYouLink}
          </ul>
          <ul className="session-right-btn-list">
            <Link to='/upload'>
              <div className="icon-upload"></div>
            </Link>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  {imgAvatar}
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
  }
}

export default PhotoShowNav;
