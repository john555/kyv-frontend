import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './common/Button';
import DeleteButton from './common/DeleteButton';

const formatTimeOut = timeOut => (
  timeOut === '' ? '--:--' : timeOut
);

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
          <span className="visitorDetails__value visitorDetails__value--big">{props.visitorDetails.cardNumber}</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">{'Visitor\'s Name'}</span>
          <span className="visitorDetails__value">{props.visitorDetails.visitorName}</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">{'Host\'s Name'}</span>
          <span className="visitorDetails__value">{props.visitorDetails.hostName}</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Reason for visit</span>
          <span className="visitorDetails__value">{props.visitorDetails.reason}</span>
        </div>
      </div>
      <div className="visitorDetails__contentGroup">
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Time in</span>
          <span className="visitorDetails__value visitorDetails__value--big">{props.visitorDetails.timeIn}</span>
        </div>
        <div className="visitorDetails__detail">
          <span className="visitorDetails__label">Time out</span>
          <span className="visitorDetails__value visitorDetails__value--big">{formatTimeOut(props.visitorDetails.timeOut)}</span>
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
  visitorDetails: PropTypes.shape({
    cardNumber: PropTypes.string.isRequired,
    visitorName: PropTypes.string.isRequired,
    hostName: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    timeIn: PropTypes.string.isRequired,
    timeOut: PropTypes.string.isRequired,
  }).isRequired,
};

const getVisitorDetails = logs => logs.find(log => (
  log.id === logs.activeLogId
));

const mapStateToProps = (state) => {
  console.log(state, 'VisitorDetails');
  return ({
    visitorDetails: getVisitorDetails(state.visitorLogs.logs),
  });
};
export default connect(mapStateToProps, null)(VisitorDetails);
