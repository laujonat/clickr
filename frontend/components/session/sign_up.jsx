import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      fname: '',
      lname: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-box-body">
        <div className="session-box">
          <h2><p>Sign up</p></h2>
            <form onSubmit={this.handleSubmit}>
              <div className="first-name-contain">
                <input
                  type="text"
                  placeholder="First name"
                  value={this.state.fname}
                  onChange={this.handleChange('fname')}
                />
              </div>
              <div className="last-name-contain">
                <input
                  type="text"
                  placeholder="Last name"
                  value={this.state.lname}
                  onChange={this.handleChange('lname')}
                />
              </div>
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <input
                type="password"
                placeholder="Password: Minimum 6 characters."
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
             <input type="submit" value="Sign Up"/>
             <div className="row-sign-in">Already have an acccount? <Link to="/login"><p id="log-in-link">Sign in</p></Link></div>
            </form>
          </div>
      </div>
    );
  }
}

export default SignupForm;
