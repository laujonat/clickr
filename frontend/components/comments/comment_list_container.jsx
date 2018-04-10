import { connect } from 'react-redux';
import CommentList from './comment_list';
import { fetchAllComments } from '../../actions/comment_actions';
import { commentSelector } from '../../selectors/comments_selector';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comments: commentSelector(state) || []
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchAllComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
