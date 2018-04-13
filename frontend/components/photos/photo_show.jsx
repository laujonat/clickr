import React from 'react';
import PhotoShowNav from './photo_show_nav';
import CommentListContainer from '../comments/comment_list_container';
import PhotoEditForm from './photo_edit_form';
import TagIndexContainer from '../tags/tags_index_container';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hideForm: true
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId)
      .then(() => this.props.fetchTags(this.props.match.params.photoId))
      .then(() => this.setState({loading: false}));
  }

  removePhoto() {
    this.props.removePhoto(this.props.photo.id)
      .then(() => this.props.history.push(`/user/${this.props.currentUser.id}`));
  }

  toggleForm() {
    this.setState({hideForm: !this.state.hideForm});
  }

  render() {
    const { updatePhoto } = this.props;
    const date = new Date(this.props.photo.created_at);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let deleteBtn, editBtn;
    if(this.props.currentUser.id === this.props.photo.user_id) {
      deleteBtn = <p onClick={this.removePhoto.bind(this)} className="delete-show-button">Delete</p>;
      editBtn = <button className="photo-edit-btn" onClick={this.toggleForm}>edit</button>;
    }


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
          {deleteBtn}
          {editBtn}
        </div>
        <div className="sub-photo-view-container">
          <div className="sub-photo-center-content">
            <div className="sub-left-view">
              <div className="photo-attribution">

                <img className="photo-credit-avatar" src={`${this.props.photo.user_avatar}`} />

                <div className="attribution-info">

                    <a>{this.props.photo.user_fname} {this.props.photo.user_lname}</a>


                    <a className="attr-info-title">{this.props.photo.title}</a>

                    {this.state.hideForm ?
                      null
                      : <PhotoEditForm
                          title={this.props.photo.title}
                          description={this.props.photo.description}
                          updatePhoto={updatePhoto}
                          photoId={this.props.photo.id}
                          />}

                  <div className="field-photo-desc">
                    <p>{this.props.photo.description}</p>
                  </div>

                  <div className="likes-count-section"></div>
                </div>
              </div>
              <CommentListContainer photoId={this.props.photo.id}/>
            </div>
            <div className="sub-right-view">
              <div className="sub-right-view-row1">
                <div className="left-stats-view-container">
                  <span>clickr</span>
                </div>
                <div className="right-stats-view-container">
                  <span>Taken on {monthNames[month]} {day}, {year}</span>
                  <span>No rights reserved.</span>
                </div>
              </div>

              <div className="albums-photo-show-section">


              </div>
              <div className="sub-tags-add-people-section-container">
                <div className="photo-tags-view-container">
                  <div className="photo-tags-menu">
                    <p id="tag-link">Tags ©</p>
                    <p>Add tags</p>
                  </div>

                  <TagIndexContainer tags={this.props.tags}/>
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
