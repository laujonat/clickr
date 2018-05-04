import React from 'react';
import UserProfileHeader from './user_profile_header';
import UserProfileNav from './user_profile_nav';
import UserPhotostream from './user_photostream';
// import AlbumIndexContainer from '../albums/albums_index_container';
import AlbumsStreamContainer from '../albums/albums_stream_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getPhotos(this.props.match.params.userId);
    this.props.getUser(this.props.match.params.userId)
      .then(() => this.setState({loading: false}));
  }

  render() {

    const Panes = [
      {title: 'Photostream', content: <UserPhotostream photos={this.props.userPhotos}/>},
      {title: 'Albums', content: <AlbumsStreamContainer
                                        user={this.props.user}
                                        currentUser={this.props.currentUser} />}
    ];
    return (
      this.state.loading ?
        <div>Loading ....</div>
      :
        <div className="user-profile-wrapper">
          <UserProfileHeader
            currentUser={this.props.currentUser}
            userPhotos={this.props.userPhotos}
            user={this.props.user}
          />
          <UserProfileNav panes={Panes}/>
        </div>
    );
  }
}

export default UserProfile;
