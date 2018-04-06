import React from 'react';
import UploadFormContainer from './upload_form_container';

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      showForm: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({showForm: !this.state.showForm});
  }

  toggleDisplay() {
    if(this.state.showForm) {
      return (
        <UploadFormContainer />
      );
    } else {
      return (
        <div className="upload-center-text">
          <h3>Upload your photos here</h3>
          <button className="upload-btn" onClick={this.onClick}>Click me!</button>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="upload-header"></div>
        <div className="upload-body">
          {this.toggleDisplay()}
        </div>
      </React.Fragment>
    );
  }

}


export default UploadPhoto;
