import React from 'react';
import { Link } from 'react-router-dom';


class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      user_id: this.props.comment.user_id,
      photo_id: this.props.comment.photo_id
    };

    this.props.updateComment(comment, this.props.comment.id)
      .then(() => this.props.toggleCommentForm());
  }

  render () {
    return (
      <form className="comments-form">
        <div className="comment-form-field">
          <textarea
            className="new-comment-text"
            type="text"
            placeholder={this.props.comment.body}
            onChange={this.updateInput("body")}
            value={this.state.body}
          />
        <button className="comment-button" onClick={this.handleSubmit}>update</button>
        </div>
      </form>
    );
  }
}



class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      body: ""
    };
    this.toggleCommentForm = this.toggleCommentForm.bind(this);
  }

  toggleCommentForm() {
    this.setState({isEdit: !this.state.isEdit});
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    const { updateComment } = this.props;
    let id = this.props.comment.id;
    let options;
    if(this.props.currentUser.id === this.props.comment.user_id) {
      options =
      <div className="flex-edit-delete">
        <p onClick={() => this.toggleCommentForm()}>edit</p>&nbsp;<p onClick={() => this.props.deleteComment(id).then(() => this.props.fetchComments(this.props.comment.photo_id))}>delete</p>
      </div>;
    }

    let form = this.state.isEdit ? <EditForm toggleCommentForm={this.toggleCommentForm} comment={this.props.comment} updateComment={updateComment}/> :   <div className="comment-content">{this.props.comment.body}</div>;


    return (
      <li className="comment-container">
        <img className="comment-circle-icon" src={`${this.props.comment.user_avatar}`} />
        <div className="flex-comment-edit-bar">
          <p className="comment-author">{this.props.comment.user_fname} {this.props.comment.user_lname}</p>
          {options}
        </div>
        {form}
      </li>
    );
  }
}

export default CommentListItem;
