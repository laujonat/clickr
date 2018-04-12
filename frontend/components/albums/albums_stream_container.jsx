import { connect } from 'react-redux';
import AlbumStream from './album_stream';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumStream));
