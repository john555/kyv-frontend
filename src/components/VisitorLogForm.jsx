import React, { Component } from 'react';
import Button from './common/Button';
import SignaturePad from './SignaturePad';
import VisitorLogProgress from './VisitorLogProgress';

class VisitorLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      visitorName: '',
      hostName: '',
      reason: '',
      stage: 1,
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.stage === 1) {
      this.setState(prevState => ({
        ...prevState,
        stage: 2,
      }));
    }
  };

  showPreviousForm = () => {
    this.setState(prevState => ({
      ...prevState,
      stage: 1,
    }));
  };

  renderPreviousButton = () => {
    if (this.state.stage === 1) {
      return '';
    }

    return (
      <Button
        className="visitorDetails__button"
        onClick={this.showPreviousForm}
      >
        Previous
      </Button>
    );
  }

  render() {
    return (
      <div className="visitorLogForm">
        <div className="visitorLogForm__progress">
          <VisitorLogProgress stage={this.state.stage} />
        </div>
        <h1 className="visitorLogForm__heading">Add visitor log</h1>
        <div className="visitorLogForm__contentWrapper">
          <div className={`visitorLogForm__content visitorLogForm__content--${this.state.stage}`}>
            <div className="visitorLogForm__details">
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
            </div>
            <div className="visitorLogForm__signature">
              <SignaturePad />
            </div>
          </div>
        </div>
        <div className="visitorLogForm__options">
          {this.renderPreviousButton()}
          <Button onClick={this.handleSubmit} className="visitorDetails__button">
            {this.state.stage === 1 ? 'Next' : 'Add'}
          </Button>
        </div>
      </div>
    );
  }
}

export default VisitorLogForm;
