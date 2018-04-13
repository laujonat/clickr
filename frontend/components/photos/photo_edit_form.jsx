import React from 'react';

class PhotoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updatePhoto(
      {
        title: this.state.title,
        description: this.state.description
      },
      this.props.photoId
    ).then(() => this.props.toggleForm());
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form>
        <input
          className="edit-title-input"
          type="text"
          onChange={this.updateInput("title")}
          value={this.state.title}
          />
        <textarea
          className="edit-description-input"
          type="text"
          onChange={this.updateInput("description")}
          value={this.state.description}
        />
      <button className="update-photo-attr" onClick={this.handleSubmit}>Update</button>
      </form>
    );
  }
}

export default PhotoEditForm;
