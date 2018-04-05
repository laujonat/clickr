import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  console.log(state.session.currentUser);
  const currentUser = state.session.currentUser;
  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
