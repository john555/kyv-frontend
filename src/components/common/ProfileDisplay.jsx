import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProfileDisplay = props => (
  <div className="profileDisplay">
    <button
      className="profileDisplay__icon"
      onClick={props.toggleDropdown}
      style={{ backgroundImage: `url(${props.picture})` }}
    />
    <div className={`profileDisplay__dropdown ${props.active ? 'profileDisplay__dropdown--active' : ''}`}>
      <div className="profileDisplay__dropdownItem profileDisplay__dropdownItem--big">{props.fullName}</div>
      <button className="profileDisplay__dropdownItem">Sign out</button>
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
