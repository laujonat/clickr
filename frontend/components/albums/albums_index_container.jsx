import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { albumSelector } from '../../selectors/album_selector';
import { fetchAllAlbums } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userPhotos: albumSelector(state),
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: id => dispatch(fetchAllAlbums(id))
  // getPhotos: id => dispatch(fetchAllPhotos(id)),
  // getUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
