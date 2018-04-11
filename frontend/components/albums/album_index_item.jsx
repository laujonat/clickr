import React from 'react';

class AlbumIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const album_cover = this.props.album.cover_photo_url;
    return (
      <li className="row-wrap">
          <div className="album-index-item" style={{backgroundImage: "url(" + album_cover + ")"}}>
            <div className="interaction-bar">
              <div className="metaData">
                <h4>{this.props.album.name}</h4>
              </div>
              
            </div>
          </div>
      </li>
    );
  }

}

export default AlbumIndexItem;
