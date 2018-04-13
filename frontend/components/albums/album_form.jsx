import React from 'react';

class AlbumForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      user_id: this.props.currentUser.id,
      coverPhoto: null,
      coverPhotoUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    this.filename = file.name;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      return this.setState({coverPhotoUrl: fileReader.result, coverPhoto: file});
    };
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("album[name]", this.state.name);
    formData.append("album[description]", this.state.description);
    formData.append("album[user_id]", this.state.user_id);
    if(this.state.coverPhoto !== null) {
      formData.append("album[cover_img]", this.state.coverPhoto);
    }
    formData.append("photo_ids", JSON.stringify(this.props.photoIds));
    // this.props.photoIds ignored in ajax call. Handled in formData
    if(this.props.isEdit){
      console.log(this.props.albumId);
      this.props.updateAlbum(formData, this.props.albumId)
      .then(() => this.props.history.push(`/user/${this.props.currentUser.id}`));
    } else {
      this.props.createAlbum(formData, this.props.photoIds)
        .then(() => this.props.history.push(`/user/${this.props.currentUser.id}`));
    }
  }

  render() {
    let name, desc;
    if (this.props.isEdit) {
      name = this.props.name;
      desc = this.props.desc;
    } else {
      name = "new album";
      desc = "";
    }

    return (
      <form className="album-upload-form">
        <img src={this.state.coverPhotoUrl} />
        <input
          className="album-name"
          type="text"
          onChange={this.updateInput("name")}
          placeholder={name}
          value={this.state.name}
        />
        <textarea
          type="text"
          onChange={this.updateInput("description")}
          placeholder={desc}
          value={this.state.description}
        />
      <button className="album-save-button" onClick={this.handleSubmit}>SAVE</button>
      <input
        type="file"
        placeholder="Album cover photo"
        onChange={this.updateFile}
      />
      </form>
  );
  }
}

export default AlbumForm;
