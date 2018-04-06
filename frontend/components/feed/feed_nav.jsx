import React from 'react';
import { Link } from 'react-router-dom';

class FeedNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="feed-nav">
        <ul className="feed-nav-link">
          <li className="nav-link one"><Link to="/feed">All Activity</Link></li>
          <li className="nav-link two"><Link to="/feed">People</Link></li>
        </ul>
      </div>
    );
  }
}

export default FeedNav;
