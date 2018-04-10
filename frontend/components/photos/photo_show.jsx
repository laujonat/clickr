import React from 'react';
import PhotoShowNav from './photo_show_nav';
import CommentListContainer from '../comments/comment_list_container';
class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId)
      .then( () => this.setState({loading: false}));
  }

  render() {
    const date = new Date(this.props.photo.created_at);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return(
      this.state.loading ?
        <div>Loading...</div>
      :
        <div className="show-page-wrap">
        <div className="photo-view-modal-container">
          <div className="main-image-wrapper">
            <img className="main-show-image" src={`${this.props.photo.photo_url}`} />
          </div>
          <div className="photo-view-actions-container">
          </div>
        </div>
        <div className="sub-photo-view-container">
          <div className="sub-photo-center-content">
            <div className="sub-left-view">
              <div className="photo-attribution">

                <img className="photo-credit-avatar" src={`${this.props.photo.user_avatar}`} />
                <div className="attribution-info">
                  <a>{this.props.photo.photo_artist_fname} {this.props.photo.photo_artist_lname}</a>
                  <a className="attr-info-title">{this.props.photo.title}</a>

                  <div className="field-photo-desc">
                    <p>{this.props.photo.description}description heredescription heredescription heredescription heredescription heredescription heredescription heredescription </p>
                  </div>

                  <div className="likes-count-section"></div>
                </div>
              </div>
              <CommentListContainer photoId={this.props.photo.id}/>
            </div>
            <div className="sub-right-view">
              <div className="sub-right-view-row1">
                <div className="left-stats-view-container">
                  <span>All stolen photos</span>
                </div>
                <div className="right-stats-view-container">
                  <span>Taken on {monthNames[month]} {day}, {year}</span>
                  <span>No rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PhotoShow;
