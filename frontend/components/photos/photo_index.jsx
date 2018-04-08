import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const photoIndexItem = this.props.photos.map(photo => {
      return (
        <PhotoIndexItem
          key={photo.id}
          photo={photo}
        />
      );
    });
    return (
      <div>
        <ul className="photo-index-container">
          {photoIndexItem}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
