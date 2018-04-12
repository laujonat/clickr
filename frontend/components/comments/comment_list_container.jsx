import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CommentList from './comment_list';
import { fetchAllComments, deleteComment} from '../../actions/comment_actions';
import { commentSelector } from '../../selectors/comments_selector';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comments: commentSelector(state) || {},
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchAllComments(id)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList));
