import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileNav from './user_profile_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }


  componentDidMount() {

  }

  render() {
    return (
      <div>
        <UserProfileHeader />
        <UserProfileNav />


      </div>
    );
  }
}

export default UserShow;
