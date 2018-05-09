import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

const VisitorLogForm = props => (
  <div className="visitorLogForm">
    <h1 className="visitorLogForm__heading">Add visitor log</h1>
    <div className="visitorLogForm__content">
      <div className="visitorLogForm__field">
        <span className="visitorLogForm__label">Card No.</span>
        <input value="0012" onChange={props.onChange} type="number" className="visitorLogForm__input" />
      </div>
      <div className="visitorLogForm__field">
        <span className="visitorLogForm__label">{'Visitor\'s name'}</span>
        <input value="Maggie Muller" onChange={props.onChange} className="visitorLogForm__input" />
      </div>
      <div className="visitorLogForm__field">
        <span className="visitorLogForm__label">{'Host\'s name'}</span>
        <input value="John Doe" onChange={props.onChange} className="visitorLogForm__input" />
      </div>
      <div className="visitorLogForm__field">
        <span className="visitorLogForm__label">Reason for visit</span>
        <textarea value="Jumia product delivery (2 packages)" onChange={props.onChange} className="visitorLogForm__input" />
      </div>
      <div className="visitorLogForm__field">
        <span className="visitorLogForm__label">Signature</span>
        <img src="/images/signature-1.png" alt="signature" className="visitorLogForm__signature" />
        {/* <Button className="visitorLogForm__signatureButton">Add signature</Button> */}
      </div>
    </div>
    <div className="visitorLogForm__options">
      <Button className="visitorDetails__button" onClick={props.closeModal}>Close</Button>
      <Button className="visitorDetails__button">Add</Button>
    </div>
  </div>
);

VisitorLogForm.defaultProps = {
  closeModal: () => {},
  onChange: () => {},
};

VisitorLogForm.propTypes = {
  closeModal: PropTypes.func,
  onChange: PropTypes.func,
};

export default VisitorLogForm;
