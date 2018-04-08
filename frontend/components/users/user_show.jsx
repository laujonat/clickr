import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileNav from './user_profile_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   photos: []
    // };
  }


  componentDidMount() {
    // fetch photos here
    // this.props.getPhotos();
  }

  render() {
    return (
      <div>
        <UserProfileHeader
          user={this.props.currentUser}
        />
        <UserProfileNav />

      </div>
    );
  }
}

export default UserShow;
