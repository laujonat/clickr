import React from 'react';
import CommentListItem from './comment_list_item';
import CommentFormContainer from './comment_form_container';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentUser: false,
      toggle: false,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.photoId)
      .then(() => this.setState({loading: false}));
    if (this.props.currentUser) {
      this.setState({currentUser:true});
    } else {
      this.setState({currentUser:false});
    }
  }

  toggleForm() {
    this.setState({toggle: !this.state.toggle});
  }

  deleteComment() {
    this.props.deleteComment();
  }

  render() {
    const { deleteComment, fetchComments, updateComment } = this.props;
    const commentListItem = this.props.comments.map(comment => {
      return (
        <CommentListItem
          key={comment.id}
          comment={comment}
          currentUser={this.props.currentUser}
          deleteComment={deleteComment}
          fetchComments={fetchComments}
          updateComment={updateComment}
          history={this.props.history}
        />
      );
    });

    return (
      this.state.loading ?
        <div>Loading...</div>
      :
      <div className="comments-view-container">
        <ul className="comments-list">
          {commentListItem}
        </ul>
        <CommentFormContainer
          photoId={this.props.photoId}
          toggle={this.toggleForm}
        />
      </div>
    );
  }
}

export default CommentList;
