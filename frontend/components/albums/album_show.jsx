import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.removeAlbum = this.removeAlbum.bind(this);
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

  removeAlbum(id) {
    this.props.removeAlbum(id).then(() => this.forceUpdate());
  }

  editAlbum() {
    this.props.history.push(`/albums/${this.props.album.id}/edit`);
  }

  render() {
    const ourPhotos = this.props.album.photo_ids.map( id => this.props.photos[id]); // array of photos from photo_ids
    const columns = this.divideCol(ourPhotos);

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
    let deleteBtn;
    let editBtn;
    if(this.props.currentUser.id === this.props.album.user_id) {
      deleteBtn = <button onClick={() => this.removeAlbum(this.props.album.id)} className="delete-album-button">Delete</button>;
      editBtn = <button onClick={() => this.editAlbum()} className="edit-album-button">Edit</button>;
    }

    return (
      <React.Fragment>
        <div className="album-header">
          <div className="edit-delete-album-wrap">
            {deleteBtn}
            {editBtn}
          </div>
        </div>
        <div className="album-title-desc">
          <p className="album-show-title">{this.props.album.name}</p>
          <p className="album-show-desc">{this.props.album.description}</p>
        </div>
      <ul className="photo-album-layout">
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
      </React.Fragment>
    );
  }
}

export default AlbumShow;
