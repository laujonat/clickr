import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';
import { Link } from 'react-router-dom';


class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    const commentCount = this.props.photo.comments ? this.props.photo.comments.length : "";

    const commentForm = this.state.toggle
    ? <div className="photo-index-comment-wrap">
        <CommentFormContainer
          photoId={this.props.photo.id}
          toggle={this.toggleForm}/>
      </div>
    : "";

    return (
      <div className="feed-activity-card">
        <div className="photo-index-header">
          <ul className="photo-index-header-content">
            <li>
              <img className="photo-index-avatar" src={`${this.props.photo.user_avatar}`} />
            </li>
            <li>
              <Link className="link-user-prof" to={`/user/${this.props.photo.user_id}`}>{this.props.photo.user_fname} {this.props.photo.user_lname}</Link>
            </li>
          </ul>
        </div>
        <Link to={`/photos/${this.props.photo.id}`}><img className="photo-index-item" src={`${this.props.photo.photo_url}`} /></Link>
        <div className="photo-index-footer">
          <p>{this.props.photo.title}</p>
        </div>
        {commentForm}
        <div className="photo-index-stats">
          <span>{commentCount} comments</span>
          <span><i onClick={this.toggleForm} className="fa fa-comment-o" aria-hidden="true"></i></span>
        </div>
      </div>
    );
  }
}


export default PhotoIndexItem;
