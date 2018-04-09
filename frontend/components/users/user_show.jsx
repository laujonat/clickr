import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileNav from './user_profile_nav';
import UserPhotostream from './user_photostream';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    // console.log(this.props.userPhotos);
    return (
      <React.Fragment>
        <UserProfileHeader
          user={this.props.currentUser}
          photoCount={this.props.userPhotos.length}
        />
        <UserProfileNav />
        <div className="magic-tools-bar"></div>
        <UserPhotostream photos={this.props.userPhotos}/>
      </React.Fragment>
    );
  }
}

export default UserShow;
