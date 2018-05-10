import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const FloatingButton = props => (
  <Button className="floatingButton" onClick={props.onClick}>
    <svg className="floatingButton__icon" viewBox="0 0 20 20">
      <line x1="10" y1="0" x2="10" y2="20" />
      <line x1="0" y1="10" x2="20" y2="10" />
    </svg>
  </Button>
);

FloatingButton.defaultProps = {
  onClick: () => {},
};

FloatingButton.propTypes = {
  onClick: PropTypes.func,
};

export default FloatingButton;
