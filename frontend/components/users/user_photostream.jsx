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

  clickMe() {
    console.log("clicked");
  }


  render () {
    const columns = this.divideCol(this.props.photos);
    const column1 = columns[0].map(photo => {
      return (
        <div className="layout-panel">
          <div className="panel-content">
            <img className="panel-content-img aa" src={`${photo.photo_url}`} />
              <div className="panel-content-hover-display aa">
                <div className="interaction-bar aa">
                  <Link to={`/user/${photo.user_id}`}>{photo.title}</Link>
                  <a>asdasda</a>
                </div>
              </div>
          </div>
        </div>
      );
    });

    const column2 = columns[1].map(photo => {
      return (
        <div className="layout-panel">
          <div className="panel-content">
            <img className="panel-content-img ab" src={`${photo.photo_url}`} />
              <div onClick={this.clickMe} className="panel-content-hover-display ab">
                <div className="interaction-bar ab">
                  <Link to={`/user/${photo.user_id}`}>{photo.title}</Link>
                  <a>asdasda</a>
                </div>
              </div>
          </div>
        </div>
      );
    });

    const column3 = columns[2].map(photo => {
      return (
        <div className="layout-panel">
          <div className="panel-content">
            <img className="panel-content-img ac" src={`${photo.photo_url}`} />
              <div className="panel-content-hover-display ac">
                <div className="interaction-bar ac">
                  <Link to={`/user/${photo.user_id}`}>{photo.title}</Link>
                  <a>asdasda</a>
                </div>
              </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="photostream-layout">
          <div className="photostream-column one">
            {column1}
          </div>
          <div className="photostream-column two">
            {column2}
          </div>
          <div className="photostream-column three">
            {column3}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserPhotostream;
