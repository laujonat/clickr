import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { userPhotosSelector } from '../../selectors/photo_selector';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
  // const userPhotos = userPhotosSelector(state.entities, currentUser.id);
  // need selector for array of photoId's that belong to user
});

const mapDispatchToProps = dispatch => ({
  // create method to change avatar later
  getPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
