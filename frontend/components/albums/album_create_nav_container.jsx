import { connect } from 'react-redux';
import AlbumCreateNav from './album_create_nav';
// import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  // createAlbum: album => dispatch(createAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreateNav);
