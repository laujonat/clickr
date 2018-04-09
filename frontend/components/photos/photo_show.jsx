import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  render() {
    console.log(this.props.photo.user_id);
    return(
      <div>
      </div>
    );
  }
}


export default PhotoShow;
