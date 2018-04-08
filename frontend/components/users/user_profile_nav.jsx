import React from 'react';

class UserProfileNav extends React.Component {
  render() {
    return (
      <div className="user-profile-nav">
        <ul className="user-profile-nav-link">
          <li className="prof-link one">Photostream</li>
          <li className="prof-link two">Albums</li>
        </ul>
      </div>
    );
  }
}
export default UserProfileNav;
