import { connect } from 'react-redux';
import AlbumCreate from './album_create';
import { createAlbum } from '../../actions/album_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { photoSelector } from '../../selectors/photo_selector';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  photos: photoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  fetchUserPhotos: id =>dispatch(fetchAllPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreate);
