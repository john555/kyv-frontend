import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Modal = props => (
  <div
    className={`modal ${props.active ? 'modal--active' : ''}`}
    onClick={props.toggleModal}
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
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  active: state.displayModal,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
