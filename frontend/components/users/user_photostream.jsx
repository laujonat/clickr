import React from 'react';
import PhotoStreamItem from './user_photostream_item';

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
        <div className="layout-panel">
          <div className="panel-content">
            <img src={`${photo.photo_url}`} />
          </div>
        </div>
      );
    });

    const column2 = columns[1].map(photo => {
      return (
        <div className="layout-panel">
          <div className="panel-content">
            <img src={`${photo.photo_url}`} />
          </div>
        </div>
      );
    });

    const column3 = columns[2].map(photo => {
      return (
        <div className="layout-panel">
          <div className="panel-content">
            <img src={`${photo.photo_url}`} />
          </div>
        </div>
      );
    });

    return (
      <div className="photostream-layout">
        <div className="photostream-column">
          {column1}
        </div>
        <div className="photostream-column">
          {column2}
        </div>
        <div className="photostream-column">
          {column3}
        </div>
      </div>
    );
  }
}

export default UserPhotostream;
