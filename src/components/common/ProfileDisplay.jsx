import React from 'react';
import PropTypes from 'prop-types';

const ProfileDisplay = props => (
  <div className="profileDisplay">
    <button
      className="profileDisplay__icon"
      onClick={props.toggleDropdown}
    >
      j
    </button>
    <div className={`profileDisplay__dropdown ${props.active ? 'profileDisplay__dropdown--active' : ''}`}>
      <div className="profileDisplay__dropdownItem profileDisplay__dropdownItem--big">Jane Doe</div>
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
};

export default ProfileDisplay;
