import React from 'react';
import { Link } from 'react-router-dom';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    let id = this.props.comment.id;
    let options;
    if(this.props.currentUser.id === this.props.comment.user_id) {
      options =
      <div className="flex-edit-delete">
        <p>edit</p>&nbsp;<p onClick={() => this.props.deleteComment(id).then(() => this.props.fetchComments(this.props.comment.photo_id))}>delete</p>
      </div>;
    }
    return (
      <li className="comment-container">
        <img className="comment-circle-icon" src={`${this.props.comment.user_avatar}`} />
        <div className="flex-comment-edit-bar">
          <p className="comment-author">{this.props.comment.user_fname} {this.props.comment.user_lname}</p>
          {options}
        </div>
        <div className="comment-content">{this.props.comment.body}</div>
      </li>
    );
  }
}

export default CommentListItem;
