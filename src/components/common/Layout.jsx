import React from 'react';
import PropTypes from 'prop-types';

export const Container = props => (
  <div className="container">
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
