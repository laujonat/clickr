import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  photo: state.entities.photos[ownProps.match.params.photoId] || {},
});

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
