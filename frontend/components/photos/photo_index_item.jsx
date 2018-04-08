import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => {
  return (
    <li>
      <div className="feed-activity-card">
        <div className="photo-index-header">
          <ul className="photo-index-header-content">
            <li>
              <img className="photo-index-avatar" src={`${photo.user_avatar}`} />
            </li>
            <li>
              <Link to="/feed">{photo.user_fname} {photo.user_lname}</Link>
            </li>
          </ul>
        </div>
        <img className="photo-index-item" src={`${photo.photo_url}`} />
        <div className="photo-index-footer">
          <p>{photo.title}</p>
        </div>
        <div className="photo-index-stats">
          <span>clickr clickr clickr</span>
        </div>
      </div>
    </li>
  );
};


export default PhotoIndexItem;
