import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';
import DeleteButton from './common/DeleteButton';

const VisitorDetails = props => (
  <section className="visitorDetails">
    <h1 className="visitorDetails__heading">Visitor Details</h1>
    <div className="visitorDetails__topRight">
      <DeleteButton onClick={() => {}} />
    </div>
    <div className="visitorDetails__content">
      <div className="visitorDetails__contentGroup">
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Card No.</span>
          <span className="visitorDetails__value visitorDetails__value--big">0012</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">{'Visitor\'s Name'}</span>
          <span className="visitorDetails__value">Maggie Muller</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">{'Host\'s Name'}</span>
          <span className="visitorDetails__value">John Doe</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Reason for visit</span>
          <span className="visitorDetails__value">Jumia product delivery. (2 Packages)</span>
        </div>
      </div>
      <div className="visitorDetails__contentGroup">
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Time in</span>
          <span className="visitorDetails__value visitorDetails__value--big">11:41 AM</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Time out</span>
          <span className="visitorDetails__value visitorDetails__value--big">--:--</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Signature</span>
          <span className="visitorDetails__value">John Doe</span>
        </div>
      </div>
    </div>
    <div className="visitorDetails__options">
      <Button className="visitorDetails__button" onClick={props.closeModal}>Close</Button>
      <Button className="visitorDetails__button">Sign out</Button>
    </div>
  </section>
);

VisitorDetails.defaultProps = {
  closeModal: () => {},
};

VisitorDetails.propTypes = {
  closeModal: PropTypes.func,
};

export default VisitorDetails;
