import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { albumSelector } from '../../selectors/album_selector';
import { fetchAllAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  albums: albumSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: id => dispatch(fetchAllAlbums(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
