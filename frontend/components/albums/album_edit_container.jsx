import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateAlbum } from '../../actions/album_actions';
import AlbumEdit from './album_edit';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  album: state.entities.albums[ownProps.albumId],
  photos: state.entities.photos
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (album, id) => dispatch(updateAlbum(album, id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumEdit));
