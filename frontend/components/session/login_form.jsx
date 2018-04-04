import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
        <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
}


export default LoginForm;
