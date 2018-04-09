import React from 'react';

const userProfileHeader = ({ user, photoCount }) => {
  console.log(user);
  return (
    <div className="cover-photo-gradient">
      <div className="cover-content-container">
        <div className="title-block-content">
          <img className="user-avatar" src={`${user.user_profile_img}`} />
          <div className="title">
            <h1>{user.fname} {user.lname}</h1>
          </div>
          <div className="username-content">
            <p>{user.username}</p>
          </div>
          <p className="spacer"></p>
          <p className="photo-count">{photoCount} Photos</p>
        </div>
      </div>
    </div>
  );
};

export default userProfileHeader;
