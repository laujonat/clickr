import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const demoLoginCredentials = {email: "demo@clickr.com", password: "123456"};
    this.props.login(demoLoginCredentials);
  }

  render() {
    return (
      <React.Fragment>
      <div className="welcome-text">
        <h1 id="welcome-h1">A Flickr remake.</h1>
        <h3 id="welcome-h3">
          Find your inspiration. A React.js remake of Flickr.
        </h3>
        <div onClick={this.demoLogin} className="welcome-btn">Demo Me</div>

        <p id="signature">Jonathan Lau</p>

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
