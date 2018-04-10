import React from 'react';
import { Link } from 'react-router-dom';

const CommentListItem = ({comment}) => {
  return (
    <li className="comment-container">
      <img className="comment-circle-icon" src={`${comment.user_avatar}`} />
      <p className="comment-author">{comment.user_fname} {comment.user_lname}</p>
      <div className="comment-content">{comment.body}</div>
    </li>
  );
};

export default CommentListItem;
