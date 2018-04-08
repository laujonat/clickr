import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { photoSelector } from '../../selectors/photo_selector';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: photoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
