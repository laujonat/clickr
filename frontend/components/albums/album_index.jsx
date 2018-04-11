import React from 'react';
import AlbumIndexItem from './album_index_item';


class AlbumIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchAlbums(this.props.user.id)
      .then(() => this.setState({loading: false}));
  }

  render() {
    const albumIndexItem = this.props.albums.map(album => {
      return (
        <li>
          <AlbumIndexItem
            key={album.id}
            album={album}
          />
        </li>
      );
    });
    console.log(this.props);

    return (
      this.state.loading ?
        <div>Loading...</div>
      :
        <React.Fragment>
          <div className="albums-list-toolbar"></div>
          <ul className="album-layout">
            {albumIndexItem}
          </ul>
        </React.Fragment>
    );
  }
}

export default AlbumIndex;
