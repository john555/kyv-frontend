import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Modal extends Component {
  static defaultProps = {
    active: false,
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keyBoardClose);
  }

  keyBoardClose = (event) => {
    if (event.keyCode === 27 && this.props.active) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div
        className={`modal ${this.props.active ? 'modal--active' : ''}`}
        aria-hidden="true"
      >
        <Button className="modal__close" onClick={this.props.closeModal}>
          <svg className="modal__closeIcon" viewBox="0 0 20 20">
            <line x1="1" y1="1" x2="19" y2="19" />
            <line x1="19" y1="1" x2="1" y2="19" />
          </svg>
          <span className="modal__shortcut">Esc</span>
        </Button>
        <div
          className="modal__content"
          onClick={event => event.stopPropagation()}
          aria-hidden="true"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
