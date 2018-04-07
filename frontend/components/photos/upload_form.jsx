import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     title: "",
     description: "",
     imageUrl: null,
     image: null
   };
   this.handleSubmit = this.handleSubmit.bind(this);
   this.updateFile = this.updateFile.bind(this);
   this.filename = null;

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    this.filename = file.name;
    // console.log(`uploaded image file ${file.name}`);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      return this.setState({imageUrl: fileReader.result, image: file});
    };
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }
  render() {
    return (
      <React.Fragment>
        <form className="upload-form-box">
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
        <img className="upload-single-img-result" src={this.state.imageUrl} />
        </form>
      </React.Fragment>
    );
  }
}

export default UploadForm;
