import React from 'react';
import AlbumCreateNav from './album_create_nav';
import AlbumPhotoTile from './album_photo_tile';
import AlbumFormContainer from './album_form_container';

class AlbumCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      photoIds: []
    };
    this.clickImage = this.clickImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserPhotos(this.props.currentUser.id)
      .then(() => this.setState({loading: false}));
  }

  clickImage(event, id) {
    const newPhotoIds = this.state.photoIds;

    if(this.state.photoIds.includes(id)) {
      event.target.classList.remove('album-selected-border');
      const index = newPhotoIds.indexOf(id);
      newPhotoIds.splice(index,1);
    } else {
      event.target.classList.add('album-selected-border');
      newPhotoIds.push(id);
    }
    this.setState({photoIds: newPhotoIds});
  }

  render() {
    let userPhotoItems;
    if(!this.state.loading) {
      userPhotoItems = this.props.photos.map(photo => {
          return (
          <li key={photo.id} className="album-row-wrap">
            <img onClick={(e) => this.clickImage(e, photo.id)} className="album-photo-item" src={`${photo.photo_url}`} />
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
                <AlbumFormContainer photoIds={this.state.photoIds}/>
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
