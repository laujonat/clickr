import React from 'react';
import AlbumIndexContainer from './albums_index_container';
import AlbumShowContainer from './album_show_container';

class AlbumStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIndex: true,
      albumId: null
    };
    this.flipState = this.flipState.bind(this);
  }

  flipState(albumId) {
    this.setState({isIndex: !this.state.isIndex, albumId: albumId});
  }



  render() {
    let component;
    this.state.isIndex ?
      component = <AlbumIndexContainer
                      user={this.props.user}
                      currentUser={this.props.currentUser}
                      flipState={this.flipState}/>
      :
        component = <AlbumShowContainer
                      currentUser={this.props.currentUser}
                      albumId={this.state.albumId}/>;

      return (
        <React.Fragment>
          {component}
        </React.Fragment>
      );
  }

}
export default AlbumStream;
