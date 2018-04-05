import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

  render() {
    return (
      <div className="welcome-text">
        <h1 id="welcome-h1">Bargain Flickr site.</h1>
        <h3 id="welcome-h3">
          Join the clickr community, home to photos taken by artsy people.
          This is some great text.
        </h3>
        <div className="welcome-btn"><Link to="/signup">Sign up</Link></div>
    
      </div>
    );
  }
}

export default Welcome;
