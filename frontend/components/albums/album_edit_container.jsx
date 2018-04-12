import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAlbum, updateAlbum } from '../../actions/album_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { albumSelector } from "../../selectors/album_selector";
import AlbumEdit from './album_edit';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  album: albumSelector(state),
  photos: state.entities.photos
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (album, id) => dispatch(updateAlbum(album, id)),
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchAllPhotos: id => dispatch(fetchAllPhotos(id))

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumEdit));
