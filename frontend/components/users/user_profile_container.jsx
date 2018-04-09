import { connect } from 'react-redux';
import UserShow from './user_show';
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
)(UserShow);
