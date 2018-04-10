import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
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
      user_id: this.props.currentUser.id,
      photo_id: this.props.photoId
    };
    this.props.createComment(comment);
  }

  renderForm() {
    if(this.props.currentUser) {
      return (
        <form className="comments-form">
          <img className="comment-icon-currentUser" src={`${this.props.currentUser.user_profile_img}`} />
          <div className="comment-form-field">
            <textarea
              className="new-comment-text"
              type="text"
              placeholder="Add a comment"
              onChange={this.updateInput("body")}
            />
          <button className="comment-button" onClick={this.handleSubmit}>Comment</button>r
          </div>
        </form>
      );
    } else {
        return (
          <div>Sign In</div>
        );
    }
  }

  render() {
    console.log('comment form class');
    return (
      <React.Fragment>
        {this.renderForm()}

      </React.Fragment>
    );
  }
}

export default CommentForm;
