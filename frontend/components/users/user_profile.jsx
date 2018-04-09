import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileNav from './user_profile_nav';
import UserPhotostream from './user_photostream';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getPhotos(this.props.match.params.userId);
  }

  render() {
    return (
      <div className="user-profile-wrapper">
        <UserProfileHeader
          user={this.props.currentUser}
          userPhotos={this.props.userPhotos}
        />
        <UserProfileNav />

        <UserPhotostream photos={this.props.userPhotos}/>
      </div>
    );
  }
}

export default UserProfile;


/*<div className="magic-tools-bar"></div>*/
