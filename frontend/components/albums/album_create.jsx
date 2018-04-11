import React from 'react';
import AlbumCreateNav from './album_create_nav';
import AlbumPhotoTile from './album_photo_tile';
import AlbumFormContainer from './album_form_container';

class AlbumCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      active: false,
      photoIds: []
    };
  }

  componentDidMount() {
    this.props.fetchUserPhotos(this.props.currentUserId)
      .then(() => this.setState({loading: false}));
  }

  clickImage() {
    // this.setState((prevState) => {
    //   return { active: !prevState.active };
    // });
    console.log("clickedme");
  }

  render() {
    let active = (this.state.active ? ' active': '');

    let userPhotoItems;
    if(!this.state.loading) {
      userPhotoItems = this.props.photos.map(photo => {
          return (
          <li className="album-row-wrap">
            <img onClick={this.clickImage} className="album-photo-item" src={`${photo.photo_url}`} />
          </li>
          );
        });
    }

    return (
      this.state.loading ?
        <div>Loading...</div>
      :
      <React.Fragment>
        <div className="album-create-wrapper">
          <div className="album-top-spacer">
            <p>New Album</p>
          </div>
          <div className="mat-content">
            <div className="left-form-wrapper">
              <div className="album-upload-container">
                <AlbumFormContainer />
              </div>
            </div>
            <div className="photo-index-render-wrapper">
              <ul className="album-photo-layout">
                {userPhotoItems}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlbumCreate;

// <AlbumPhotoTile
//   key={photo.id}
//   photo={photo}
// />
