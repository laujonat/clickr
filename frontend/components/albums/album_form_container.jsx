import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AlbumForm from './album_form';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm));
