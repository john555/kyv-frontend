import React, { Component } from 'react';
import Button from '../components/common/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        <div className="login__wrapper">
          <div className="login__header">
            <div className="login__logo" />
            <h1 className="login__companyName">Andela</h1>
          </div>
          <div className="login__content">
            <h2 className="login__appName">Kyv</h2>
            <p className="login__description">Visitor log management.</p>
            <Button className="login__signInButton">
              <img className="login__googleIcon" src="/images/google-icon.svg" alt="google icon" />
              <span className="login__buttonText">Sign in with Google</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
