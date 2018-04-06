import React from 'react';

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="upload-header"></div>
        <div className="upload-body">
          <div className="upload-center-text">
            <p>THIS IS SOME TEXT, TEXT AF</p>
              <div className="upload-btn"><a href="/#">Choose photos to upload</a></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}


export default UploadPhoto;
