import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileNav from './user_profile_nav';
import UserPhotostream from './user_photostream';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   photos: []
    // };
  }


  componentDidMount() {
    // fetch photos here
    this.props.getPhotos();
  }

  render() {
    console.log(this.props.userPhotos);
    return (
      <React.Fragment>
        <UserProfileHeader user={this.props.currentUser} />
        <UserProfileNav />
        <UserPhotostream photos={this.props.userPhotos}/>
      </React.Fragment>
    );
  }
}

export default UserShow;