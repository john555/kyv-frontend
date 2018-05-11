import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { getCookie } from '../helpers/cookie';
import { saveUserInfo } from '../actions/userActions';
import Login from '../pages/Login';

const requireLogin = (Comp) => {
  class RequireLogin extends Component {
    static propTypes = {
      saveUserInfo: PropTypes.func.isRequired,
    };

    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      };
    }

    componentWillMount() {
      const token = getCookie('jwt-token');
      if (token === '') {
        return;
      }
      try {
        const { UserInfo } = jwtDecode(token);
        this.props.saveUserInfo(UserInfo);
        this.setState({
          isLoggedIn: true,
        });
      } catch (error) {
        throw error;
      }
    }

    render() {
      if (!this.state.isLoggedIn) {
        return <Login />;
      }
      return <Comp />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    saveUserInfo: userInfo => dispatch(saveUserInfo(userInfo)),
  });

  return connect(null, mapDispatchToProps)(RequireLogin);
};

export default requireLogin;
