import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => {
  return (
    <div className="feed-activity-card">
      <div className="photo-index-header">
        <ul className="photo-index-header-content">
          <li>
            <img className="photo-index-avatar" src={`${photo.user_avatar}`} />
          </li>
          <li>
            <Link className="link-user-prof" to={`/user/${photo.user_id}`}>{photo.user_fname} {photo.user_lname}</Link>
          </li>
        </ul>
      </div>
      <Link to={`/photos/${photo.id}`}><img className="photo-index-item" src={`${photo.photo_url}`} /></Link>
      <div className="photo-index-footer">
        <p>{photo.title}</p>
      </div>
      <div className="photo-index-stats">
        <span>comments</span>
      </div>
    </div>
  );
};


export default PhotoIndexItem;
