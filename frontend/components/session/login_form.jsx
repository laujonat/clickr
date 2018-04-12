import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLoginCredentials = {email: "demo@clickr.com", password: "123456"};
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  demoLogin() {
    this.setState(this.demoLoginCredentials,
      () => this.props.login(this.state)
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div>
        <header className="session-new-header">
          <div className="header-logo-contain">
            <img className="top-logo" alt="logo-img" src="https://s.yimg.com/rz/d/yahoo_en-US_f_p_bestfit_2x.png" />
          </div>
        </header>
        <div className="login-position-container">
          <div className="session-box-body">
            <div className="session-box">
              <img className="login-logo" alt="logo-img" src="https://s.yimg.com/rz/d/yahoo_en-US_f_p_bestfit_2x.png" />
              <h2><p>Sign in</p></h2>
              <form className="login-form-challenge" onSubmit={this.handleSubmit}>
              <div className="login-input-field-box">
                <input
                  id="login-email-input"
                  type="text"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                />
              </div>
              <div className="login-input-field-box">
                <input
                  id="login-password-input"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                />
              </div>
              <input className="signInButton" id="login-sigin" type="submit" name="signin" value="Sign in"/>
              <div className="demo-sign-up" onClick={this.demoLogin}>Demo Login</div>
              <div className="row-sign-up">Don't have an acccount? <Link to="/signup"><p id="sign-up-link">Sign up</p></Link></div>
            </form>
            </div>
          </div>
        </div>
        <footer className="login-footer"></footer>
      </div>
    );
  }
}


export default LoginForm;
