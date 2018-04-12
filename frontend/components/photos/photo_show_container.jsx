import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
// import { fetchAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  photo: state.entities.photos[ownProps.match.params.photoId] || {},
});

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(fetchPhoto(id)),
  removePhoto: id => dispatch(deletePhoto(id))
  // fetchComments: id => dispatch(fetchAllComments(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow));
