import React from 'react';

import config from '../config';
import Button from '../components/common/Button';

const onSignInButtonClick = () => {
  const url = `${config.AUTH_API_URL}/login?redirect_url=${window.location.origin}`;
  window.location = url;
};

const Login = () => (
  <div className="login">
    <div className="login__wrapper">
      <div className="login__header">
        <div className="login__logo" />
        <h1 className="login__companyName">Andela</h1>
      </div>
      <div className="login__content">
        <h2 className="login__appName">Kyv</h2>
        <p className="login__description">Visitor log manager.</p>
        <Button
          className="login__signInButton"
          onClick={onSignInButtonClick}
        >
          <img className="login__googleIcon" src="/images/google-icon.svg" alt="google icon" />
          <span className="login__buttonText">Sign in with Google</span>
        </Button>
      </div>
    </div>
  </div>
);

export default Login;
