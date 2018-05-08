import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => (
  <div className={`modal ${props.active ? 'modal--active' : ''}`}>
    <div className="modal__content">
      {props.children}
    </div>
  </div>
);

Modal.defaultProps = {
  active: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

export default Modal;
