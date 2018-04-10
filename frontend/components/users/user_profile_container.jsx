import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { photoSelector } from '../../selectors/photo_selector';
import { userSelector } from '../../selectors/user_selector';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userPhotos: photoSelector(state),
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  getPhotos: id => dispatch(fetchAllPhotos(id)),
  getUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
