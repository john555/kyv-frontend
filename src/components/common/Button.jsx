import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    className={`button ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
