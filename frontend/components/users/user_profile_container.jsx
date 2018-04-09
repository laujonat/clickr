import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { photoSelector } from '../../selectors/photo_selector';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  userPhotos: photoSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getPhotos: id => dispatch(fetchAllPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
