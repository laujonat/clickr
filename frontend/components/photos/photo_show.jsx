import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  render() {
    console.log(this.props.photo.user_id);
    return(
      <React.Fragment>
      <div className="photo-view-modal-container">
        <div className="main-image-wrapper">
          <img className="main-show-image" src={`${this.props.photo.photo_url}`} />
        </div>
        <div className="photo-view-actions-container">
        </div>
      </div>

    </React.Fragment>
    );
  }
}


export default PhotoShow;
