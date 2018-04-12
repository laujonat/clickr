import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AlbumShow from './album_show';
import { deleteAlbum, fetchAllAlbums } from '../../actions/album_actions';


const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.session.currentUser,
  album: state.entities.albums[ownProps.albumId],
  photos: state.entities.photos
});

const mapDispatchToProps = dispatch => ({
  removeAlbum: id => dispatch(deleteAlbum(id)),
  fetchAllAlbums: id => dispatch(fetchAllAlbums(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));
