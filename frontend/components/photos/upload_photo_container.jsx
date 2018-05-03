import { connect } from 'react-redux';
import UploadPhoto from './upload_photo';
import { createPhoto } from '../../actions/photo_actions';
import { routeChanged } from '../../actions/app_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.photo
});

const mapDispatchToProps = dispatch => ({
  upload: photo => dispatch(createPhoto(photo)),
  routeChanged: () => dispatch(routeChanged())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhoto);
