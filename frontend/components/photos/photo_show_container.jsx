import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto, updatePhoto } from '../../actions/photo_actions';
import { fetchAllTags,createTag, deleteTag } from '../../actions/tag_actions';
import { routeChanged } from '../../actions/app_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  photo: state.entities.photos[ownProps.match.params.photoId] || {},
  tags: Object.values(state.entities.tags),
  errors: state.errors.photo
});

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(fetchPhoto(id)),
  removePhoto: id => dispatch(deletePhoto(id)),
  updatePhoto: (photo, id) => dispatch(updatePhoto(photo, id)),
  fetchTags: id => dispatch(fetchAllTags(id)),
  createTag: tag => dispatch(createTag(tag)),
  deleteTag: id => dispatch(deleteTag(id)),
  routeChanged: () => dispatch(routeChanged())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow));
