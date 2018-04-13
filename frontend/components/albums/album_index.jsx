import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';

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
    let link;
    if(this.props.currentUser.id === this.props.user.id)  {
        link = <Link to="/albums/create">New Album</Link>;
    }
    const albumIndexItem = this.props.albums.map(album => {
      return (
        <AlbumIndexItem
          flipState={this.props.flipState}
          key={album.id}
          album={album}
        />
      );
    });

    return (
      this.state.loading ?
        <div>Loading...</div>
      :
        <React.Fragment>
          <div className="albums-list-toolbar">
            {link}
          </div>
          <ul className="album-layout">
            {albumIndexItem}
          </ul>
        </React.Fragment>
    );
  }
}

export default AlbumIndex;
