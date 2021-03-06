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

  componentDidMount() {
    this.props.routeChanged();
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
          <button className="upload-btn" onClick={this.onClick}>Choose photos to upload</button>
        </div>
      );
    }
  }

  renderErrors() {
    if(this.props.errors) {
      return (
        <ul className="errors_render">
          {this.props.errors.map((error, i) => (
            <li key={`${i}`}>{error}</li>)
          )}
        </ul>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="upload-header"></div>
        <div className="upload-body">
          {this.toggleDisplay()}
          {this.renderErrors()}
        </div>
      </React.Fragment>
    );
  }

}


export default UploadPhoto;
