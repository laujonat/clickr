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
      <div>
        <header className="session-new-header">
          <div className="header-logo-contain">
            <img className="top-logo" alt="logo-img" src="https://s.yimg.com/rz/d/yahoo_en-US_f_p_bestfit_2x.png" />
          </div>
        </header>
        <div className="signup-position-container">
          <div className="session-box-body">
            <div className="session-box">
              <h2><p>Sign up</p></h2>
                <form className="signup-form-challenge" onSubmit={this.handleSubmit}>
                  <fieldset className="f-l-name-container">
                    <div className="row-1-contain">
                      <input
                        id="row-1-input"
                        type="text"
                        placeholder="First name"
                        value={this.state.fname}
                        onChange={this.handleChange('fname')}
                      />
                    </div>
                    <div className="row-1-2-contain">
                      <input
                        id="row-1-input"
                        type="text"
                        placeholder="Last name"
                        value={this.state.lname}
                        onChange={this.handleChange('lname')}
                      />
                    </div>
                  </fieldset>
                  <div className="row-email-contain">
                    <input
                      id="row-2-input"
                      type="text"
                      placeholder="Email address"
                      value={this.state.email}
                      onChange={this.handleChange('email')}
                    />
                  </div>
                  <div className="row-username-contain">
                    <input
                      id="row-3-input"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange('username')}
                    />
                  </div>
                  <div className="row-password-contain">
                    <input
                        id="row-4-input"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                      />
                  </div>
                  <div className="policy-contain">
                    <p className="policy-item">By clicking "Continue", you agree to the Terms and Privacy Policy</p>
                  </div>
                 <input className="signUpButton" id="signup" type="submit" value="Sign Up"/>
                 <div className="row-sign-in">Already have an acccount? <Link to="/login"><p id="log-in-link">Sign in</p></Link></div>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
