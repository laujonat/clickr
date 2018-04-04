import React from 'react';

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
      <div>
        <h3>Sign Up</h3>
          <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="First name"
            value={this.state.fname}
            onChange={this.handleChange('fname')}
          />
          <input
            type="text"
            placeholder="Last name"
            value={this.state.lname}
            onChange={this.handleChange('lname')}
          />
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
          </form>
      </div>
    );
  }
}

export default SignupForm;
