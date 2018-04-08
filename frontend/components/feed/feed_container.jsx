import { connect } from 'react-redux';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  // photos: state.entities.photos
});

const mapDispatchToProps = dispatch => ({
  // getPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
