import React from 'react';
import PropTypes from 'prop-types';

const ProfileDisplay = props => (
  <div className="profileDisplay">
    <button className="profileDisplay__icon" />
    <div className={`profileDisplay__dropdown ${props.active ? 'profileDisplay__dropdown--active' : ''}`}>
      <div className="profileDisplay__dropdownItem profileDisplay__dropdownItem--big">Jane Doe</div>
      <button className="profileDisplay__dropdownItem">Sign out</button>
    </div>
  </div>
);

ProfileDisplay.defaultProps = {
  active: false,
};

ProfileDisplay.propTypes = {
  active: PropTypes.bool,
};

export default ProfileDisplay;
