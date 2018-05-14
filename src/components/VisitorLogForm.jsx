import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

class VisitorLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      visitorName: '',
      hostName: '',
      reason: '',
      signature: '/images/signature-1.png',
      showSignature: false,
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    // handle submit here
  };

  renderSignature = () => {
    if (this.state.showSignature) {
      return (
        <img
          src={this.state.signature}
          alt="signature"
          className="visitorLogForm__signature"
        />
      );
    }
    return (
      <Button className="visitorLogForm__signatureButton">Add signature</Button>
    );
  };

  render() {
    return (
      <div className="visitorLogForm">
        <h1 className="visitorLogForm__heading">Add visitor log</h1>
        <div className="visitorLogForm__content">
          <div className="visitorLogForm__field">
            <span className="visitorLogForm__label">Card No.</span>
            <input
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={this.onChange}
              type="number"
              className="visitorLogForm__input"
            />
          </div>
          <div className="visitorLogForm__field">
            <span className="visitorLogForm__label">{'Visitor\'s name'}</span>
            <input
              name="visitorName"
              value={this.state.visitorName}
              onChange={this.onChange}
              className="visitorLogForm__input"
            />
          </div>
          <div className="visitorLogForm__field">
            <span className="visitorLogForm__label">{'Host\'s name'}</span>
            <input
              name="hostName"
              value={this.state.hostName}
              onChange={this.onChange}
              className="visitorLogForm__input"
            />
          </div>
          <div className="visitorLogForm__field">
            <span className="visitorLogForm__label">Reason for visit</span>
            <textarea
              name="reason"
              value={this.state.reason}
              onChange={this.onChange}
              className="visitorLogForm__input"
            />
          </div>
          <div className="visitorLogForm__field">
            <span className="visitorLogForm__label">Signature</span>
            {this.renderSignature()}
          </div>
        </div>
        <div className="visitorLogForm__options">
          <Button className="visitorDetails__button" onClick={this.props.closeModal}>Close</Button>
          <Button onClick={this.handleSubmit} className="visitorDetails__button">Add</Button>
        </div>
      </div>
    );
  }
}

VisitorLogForm.defaultProps = {
  closeModal: () => {},
};

VisitorLogForm.propTypes = {
  closeModal: PropTypes.func,
};

export default VisitorLogForm;
