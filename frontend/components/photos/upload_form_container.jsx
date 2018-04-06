import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createPhoto } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  upload: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
