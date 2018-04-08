import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     title: "",
     description: "",
     user_id: this.props.currentUser.id,
     photoUrl: null,
     photo: null
   };
   this.handleSubmit = this.handleSubmit.bind(this);
   this.updateFile = this.updateFile.bind(this);
   this.filename = null;

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo[title]", this.state.title);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[photo_url]", this.state.photo);
    formData.append("photo[user_id]", this.state.user_id);
    this.props.upload(formData);
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
      return this.setState({photoUrl: fileReader.result, photo: file});
    };
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }
  render() {
    return (
      <React.Fragment>
        <form ref={this.myForm} className="upload-form-box">
          <h3>Upload a photo:</h3>
          <h5>{this.filename}</h5>
          <input
            type="text"
            onChange={this.updateInput("description")}
            placeholder="Add a description"
            value={this.state.description}
            />
          <input
            type="text"
            onChange={this.updateInput("title")}
            placeholder="Add a title"
            value={this.state.title}
          />
          <input
            type="file"
            onChange={this.updateFile}
          />
        <button onClick={this.handleSubmit}>Upload</button>
        <img className="upload-single-img-result" src={this.state.photoUrl} />
        </form>
      </React.Fragment>
    );
  }
}

export default UploadForm;
