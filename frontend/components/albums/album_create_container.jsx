import { connect } from 'react-redux';
import AlbumCreate from './album_create';
import { createAlbum } from '../../actions/album_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { photoSelector } from '../../selectors/photo_selector';
import { routeChanged } from '../../actions/app_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  photos: photoSelector(state),
  errors: state.errors.album
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  fetchUserPhotos: id => dispatch(fetchAllPhotos(id)),
  routeChanged: () => dispatch(routeChanged())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreate);
