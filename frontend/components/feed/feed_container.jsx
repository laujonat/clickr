import { connect } from 'react-redux';
import Feed from './feed';
import { receiveAllPhotos } from '../../actions/photo_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
