import React from 'react';
import UploadPhotoContainer from '../photos/upload_photo_container';
import { AuthRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';

class UploadNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="upload-nav">
        <ul className="left-upload-content">
          <li className="logo-img-upload"><Link to="/">clickr</Link></li>
          <li><Link to="/">Your Photostream</Link></li>
        </ul>
        <ul className="right-upload-content">
          <li><img style={{width: '27px', height: '27px'}} src={this.props.currentUser.image_url}/></li>
        </ul>
      </div>
    );
  }
}

export default UploadNav;
