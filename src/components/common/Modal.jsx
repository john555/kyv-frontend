import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => (
  <div
    className={`modal ${props.active ? 'modal--active' : ''}`}
    onClick={props.closeModal}
    aria-hidden="true"
  >
    <div
      className="modal__content"
      onClick={event => event.stopPropagation()}
      aria-hidden="true"
    >
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
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
