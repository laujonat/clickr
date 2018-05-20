import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Welcome from './welcome';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
