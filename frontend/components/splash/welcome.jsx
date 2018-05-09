import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="welcome-text">
        <h1 id="welcome-h1">A Flickr remake.</h1>
        <h3 id="welcome-h3">
          Find your inspiration. A React remake of Flickr.
        </h3>
        <div className="welcome-btn"><Link to="/signup">Sign up</Link></div>
      </div>
      <div className="welcome-footer">
        <ul className="welcome-footer-list">
          <li>
            <a href="http://github.com/laujonat">Github</a>
          </li>
          <li>
            <a href="http://linkedin.com/in/jonathanhlau">Linkedin</a>
          </li>
        </ul>
      </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
