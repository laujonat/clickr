import React from 'react';

class userProfileHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cover-photo-gradient">
        <div className="cover-content-container">
          <div className="title-block-content">
            <img className="user-avatar" src={`${this.props.user.user_profile_img}`} />
            <div className="title">
              <h1>{this.props.user.fname} {this.props.user.lname}</h1>
            </div>
            <div className="username-content">
              <p>{this.props.user.username}</p>
            </div>
            <p className="spacer"></p>
            <p className="photo-count">{this.props.userPhotos.length} Photos</p>
          </div>
        </div>
      </div>
    );
  }
}

export default userProfileHeader;
