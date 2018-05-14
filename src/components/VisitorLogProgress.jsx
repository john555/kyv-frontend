import React from 'react';
import PropTypes from 'prop-types';

const VisitorLogProgress = props => (
  <div className={`visitorLogProgress visitorLogProgress--stage${props.stage}`}>
    <div className="visitorLogProgress__stage">
      <span className="visitorLogProgress__stageNumber">1</span>
      Add details
    </div>
    <div className="visitorLogProgress__stage">
      <span className="visitorLogProgress__stageNumber">2</span>
      Add Signature
    </div>
  </div>
);

VisitorLogProgress.defaultProps = {
  stage: 1,
};

VisitorLogProgress.propTypes = {
  stage: PropTypes.number,
};

export default VisitorLogProgress;
