import React from 'react';
import AlbumCreateNav from './album_create_nav';
import AlbumPhotoTile from './album_photo_tile';
import AlbumFormContainer from './album_form_container';


class AlbumEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      photoIds: [],
      isEdit: true,
      name: null,
      desc: null,
      albumId: null
    };
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
      .then(() => this.props.fetchAllPhotos(this.props.currentUser.id)
      .then(() => this.setState({
        loading: false,
        photoIds: this.props.album[0].photo_ids,
        name: this.props.album[0].name,
        desc: this.props.album[0].description,
        albumId: this.props.album[0].id})));
  }

  clickImage(event, id) {
    const newPhotoIds = this.state.photoIds;

    if(this.state.photoIds.includes(id)) {
      event.target.classList.toggle('album-selected-border');
      this.setState({photoIds: newPhotoIds});
      const index = newPhotoIds.indexOf(id);
      newPhotoIds.splice(index,1);
    } else {
      event.target.classList.add('album-selected-border');
      newPhotoIds.push(id);
    }
    this.setState({photoIds: newPhotoIds});
  }

  render() {
    let albumPhotos;
    let userPhotoItems;
    if(!this.state.loading) {
      userPhotoItems = this.props.photos.map(photo => {
        let border;
        if(this.state.photoIds.includes(photo.id)) {
          border = "album-selected-border";
        }
        return (
          <li key={photo.id} className="album-row-wrap">
            <img onClick={(e) => this.clickImage(e, photo.id)} className={`album-photo-item ${border}`} src={`${photo.photo_url}`} />
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
            <p>Edit Album</p>
          </div>
          <div className="mat-content">
            <div className="left-form-wrapper">
              <div className="album-upload-container">
                <AlbumFormContainer
                  isEdit={this.state.isEdit}
                  photoIds={this.state.photoIds}
                  name={this.state.name}
                  desc={this.state.desc}
                  albumId={this.state.albumId}
                />
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

export default AlbumEdit;
