import React from 'react';

class userProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.user.created_at.slice(0, 4));
  }

  render() {
    const cover_photo = this.props.user.profile_cover_photo;
    return (
      <div className="cover-photo-gradient" style={{backgroundImage: "url(" + cover_photo + ")"}}>
        <div className="cover-content-container">
          <div className="title-block-content">
            <img className="user-avatar" src={`${this.props.user.user_profile_img}`} />
            <div className="title">
              <h1>{this.props.user.fname} {this.props.user.lname}</h1>
            </div>
            <div className="username-content">
              <p>{this.props.user.username}</p>
            </div>
            <div className="inline-secondary-info">
              <p className="photo-count">{this.props.userPhotos.length} Photos</p>
              <p className="year-joined">Joined {this.props.user.created_at.slice(0, 4)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default userProfileHeader;
