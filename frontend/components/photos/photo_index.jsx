import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.divideCol = this.divideCol.bind(this);
  }

  componentDidMount() {
    this.props.getPhotos();
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

  render() {
    const columns = this.divideCol(this.props.photos);
    const column1 = columns[0].map(photo => {
      return (
        <li key={photo.id}>
          <PhotoIndexItem
            photo={photo}
          />
        </li>
      );
    });

    const column2 = columns[1].map(photo => {
      return (
        <li key={photo.id}>
          <PhotoIndexItem
            photo={photo}
          />
        </li>
      );
    });

    const column3 = columns[2].map(photo => {
      return (
        <li key={photo.id}>
          <PhotoIndexItem
            photo={photo}
          />
        </li>
      );
    });

    return (
      <div className="feed-scroll-wrapper">
        <div className="feed-container-wrapper">
          <ul className="feed-layout">
            <div className="feed-column one">
              {column1}
            </div>
            <div className="feed-column two">
              {column2}
            </div>
            <div className="feed-column three">
              {column3}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoIndex;
