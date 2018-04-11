import React from 'react';

class AlbumForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      user_id: this.props.currentUser.id,
    };

  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("album[name]", this.state.title);
    // formData.append("album[description]", this.state.description);
    // formData.append("album[user_id]", this.state.user_id);
    // this.props.createAlbum(formData);
  }

  render() {
    return (
      <form className="album-upload-form">
        <input
          className="album-name"
          type="text"
          onChange={this.updateInput("name")}
          placeholder="new album"
          value={this.state.name}
        />
        <textarea
          type="text"
          onChange={this.updateInput("description")}
          value={this.state.description}
        />
      <button className="album-save-button" onClick={this.handleSubmit}>SAVE</button>
      </form>
  );
  }
}

export default AlbumForm;
