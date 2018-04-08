import React from 'react';
import PhotoStreamItem from './user_photostream_item';

class UserPhotostream extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const photoStreamItem = this.props.photos.map(photo => {
      return (

        <PhotoStreamItem
          key={photo.id}
          photo={photo}
        />
      );
    });
    return (
      <div className="photostream-list-container">
        <div className="magic-tools-bar"></div>
        <ul className="photostream-list">
          {photoStreamItem}
          {test}
        </ul>
      </div>
    );
  }
}

export default UserPhotostream;
