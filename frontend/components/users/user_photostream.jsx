import React from 'react';
import PhotoStreamItem from './user_photostream_item';
import UserProfileNav from './user_profile_nav';
import { Link } from 'react-router-dom';

class UserPhotostream extends React.Component {
  constructor(props) {
    super(props);
    this.divideCol = this.divideCol.bind(this);
  }

  divideCol(photos) {
    const firstHalf = Math.ceil(photos.length / 3);
    const secondHalf = Math.ceil(2 * photos.length /  3);

    const col1 = photos.slice(0, firstHalf);
    const col2 = photos.slice(firstHalf, secondHalf);
    const col3 = photos.slice(secondHalf, photos.length);
    return (
      [col1, col2, col3]
    );
  }

  render () {
    const columns = this.divideCol(this.props.photos);
    const column1 = columns[0].map(photo => {
      return (
        <li key={photo.id} className="layout-panel">
        <Link to={`/photos/${photo.id}`}>
          <div className="panel-content">
            <img className="panel-content-img aa" src={`${photo.photo_url}`} />
              <div className="panel-content-hover-display aa">
                <div className="interaction-bar aa">
                  <span>{photo.title}</span>
                  <span>by {photo.user_fname} {photo.user_lname}</span>
                </div>
              </div>
          </div>
        </Link>
      </li>
      );
    });

    const column2 = columns[1].map(photo => {
      return (
        <li key={photo.id} className="layout-panel">
        <Link to={`/photos/${photo.id}`}>
          <div className="panel-content">
            <img className="panel-content-img ab" src={`${photo.photo_url}`} />
              <div onClick={this.clickMe} className="panel-content-hover-display ab">
                <div className="interaction-bar ab">
                  <span>{photo.title}</span>
                  <span>by {photo.user_fname} {photo.user_lname}</span>
                </div>
              </div>
          </div>
        </Link>
        </li>
      );
    });

    const column3 = columns[2].map(photo => {
      return (
        <li key={photo.id} className="layout-panel">
        <Link to={`/photos/${photo.id}`}>
          <div className="panel-content">
            <img className="panel-content-img ac" src={`${photo.photo_url}`} />
              <div className="panel-content-hover-display ac">
                <div className="interaction-bar ac">
                  <span>{photo.title}</span>
                  <span>by {photo.user_fname} {photo.user_lname}</span>
                </div>
              </div>
          </div>
        </Link>
      </li>
      );
    });

    return (
      <React.Fragment>
        <div className="photostream-layout-wrapper">
          <ul className="photostream-layout">
            <div className="photostream-column one">
              {column1}
            </div>
            <div className="photostream-column two">
              {column2}
            </div>
            <div className="photostream-column three">
              {column3}
            </div>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default UserPhotostream;
