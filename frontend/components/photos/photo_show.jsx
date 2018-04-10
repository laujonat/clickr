import React from 'react';
import PhotoShowNav from './photo_show_nav';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.getUser(this.props.photo.user_id)
    //   .then(() => this.setState({loading: false}));
    this.props.getPhoto(this.props.match.params.photoId);

  }

  render() {

    return(
        <div className="show-page-wrap">
        <div className="photo-view-modal-container">
          <div className="main-image-wrapper">
            <img className="main-show-image" src={`${this.props.photo.photo_url}`} />
          </div>
          <div className="photo-view-actions-container">
          </div>
        </div>
        <div className="sub-photo-view-container">
          <div className="sub-photo-center-content">
            <div className="sub-left-view">
              <div className="photo-attribution">
                <img className="photo-credit-avatar" src={`${this.props.photo.user_avatar}`} />
                <div className="attribution-info">
                  <a>{this.props.photo.photo_artist_fname} {this.props.photo.photo_artist_lname}</a>
                  <a>{this.props.photo.title}</a>
                </div>
              </div>
            </div>
            <div className="sub-right-view">
              <div className="sub-right-view-row1">
                <div className="left-stats-view-container">
                  <span>All stolen photos</span>
                </div>
                <div className="right-stats-view-container">
                  <span>Taken on October 9, 2020</span>
                  <span>No rights reserved.</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PhotoShow;
