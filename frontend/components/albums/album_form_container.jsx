import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AlbumForm from './album_form';
import { createAlbum, updateAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  name: ownProps.name,
  desc: ownProps.desc,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  updateAlbum: (album, id) => dispatch(updateAlbum(album, id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm));
