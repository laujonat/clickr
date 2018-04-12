import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { photoSelector } from '../../selectors/photo_selector';
import { userSelector } from '../../selectors/user_selector';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllAlbums } from '../../actions/album_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userPhotos: photoSelector(state),
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  getPhotos: id => dispatch(fetchAllPhotos(id)),
  getUser: id => dispatch(fetchUser(id)),
  fetchAlbums: id => dispatch(fetchAllAlbums(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));
