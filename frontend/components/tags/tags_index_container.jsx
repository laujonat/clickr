import { connect } from 'react-redux';
import TagIndex from './tags_index';
import { fetchAllTags } from '../../actions/tag_actions';
import { routeChanged } from '../../actions/app_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  tags: ownProps.tags,
  errors: state.errors.tag
});

const mapDispatchToProps = dispatch => ({
  // fetchTags: (id) => dispatch(fetchAllTags(id))
  routeChanged: () => dispatch(routeChanged())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
