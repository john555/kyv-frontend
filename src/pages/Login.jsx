import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import Button from '../components/common/Button';
import { getCookie } from '../helpers/cookie';
import config from '../config';
import { saveUserInfo } from '../actions/userActions';

class Login extends Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    saveUserInfo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const token = getCookie('jwt-token');
    if (token === '') {
      return;
    }
    try {
      const { UserInfo } = jwtDecode(token);
      this.props.saveUserInfo(UserInfo);
      this.props.history.push('/dashboard');
    } catch (error) {
      throw error;
    }
  }

  onSignInButtonClick = () => {
    const url = `${config.AUTH_API_URL}/login?redirect_url=${window.location.origin}`;
    window.location = url;
  };

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
            <Button
              className="login__signInButton"
              onClick={this.onSignInButtonClick}
            >
              <img className="login__googleIcon" src="/images/google-icon.svg" alt="google icon" />
              <span className="login__buttonText">Sign in with Google</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveUserInfo: userInfo => dispatch(saveUserInfo(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
