import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCookie } from '../../helpers/cookie';

const onSignOutButtonClick = () => {
  setCookie('jwt-token', '', -1);
  window.location = '/';
};

const ProfileDisplay = props => (
  <div className="profileDisplay">
    <button
      className="profileDisplay__icon"
      onClick={props.toggleDropdown}
      style={{ backgroundImage: `url(${props.picture})` }}
    />
    <div className={`profileDisplay__dropdown ${props.active ? 'profileDisplay__dropdown--active' : ''}`}>
      <div className="profileDisplay__dropdownItem profileDisplay__dropdownItem--big">{props.fullName}</div>
      <button
        onClick={onSignOutButtonClick}
        className="profileDisplay__dropdownItem profileDisplay__dropdownItem--button"
      >
        Sign out
      </button>
    </div>
  </div>
);

ProfileDisplay.defaultProps = {
  active: false,
  toggleDropdown: () => {},
};

ProfileDisplay.propTypes = {
  active: PropTypes.bool,
  toggleDropdown: PropTypes.func,
  fullName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

const mapStoreToProps = state => ({
  fullName: state.userInfo.fullName,
  picture: state.userInfo.picture,
});

export default connect(mapStoreToProps, null)(ProfileDisplay);
