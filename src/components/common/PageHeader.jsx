import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <header className="pageHeader">
    <h1 className="pageHeader__title">{props.title}</h1>
    {props.children}
  </header>
);

PageHeader.defaultProps = {
  title: '',
  children: '',
};

PageHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;
