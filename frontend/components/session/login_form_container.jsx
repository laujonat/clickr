import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.login
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
