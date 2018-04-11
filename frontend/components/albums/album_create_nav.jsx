import React from 'react';
import { Link } from 'react-router-dom';

class AlbumCreateNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="album-nav">
        <ul className="left-album-content">
          <li className="logo-img-album"><Link to="/feed">clickr</Link></li>
          <li>Your Photostream</li>
        </ul>
        <ul className="right-album-content">
          <li></li>
        </ul>
      </div>
    );
  }
}

export default AlbumCreateNav;
