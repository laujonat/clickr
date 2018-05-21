import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { routeChanged } from '../../actions/app_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.comment
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  routeChanged: () => dispatch(routeChanged())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
