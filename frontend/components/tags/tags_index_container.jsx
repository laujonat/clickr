import { connect } from 'react-redux';
import TagIndex from './tags_index';
import { fetchAllTags } from '../../actions/tag_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  tags: state.entities.tags
});

const mapDispatchToProps = dispatch => ({
  fetchTags: (id) => dispatch(fetchAllTags(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
