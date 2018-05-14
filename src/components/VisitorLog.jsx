import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/common/Button';
import { formatTime } from '../helpers/format';

const renderTimeOut = (timeOut) => {
  if (timeOut === '') {
    return (
      <Button
        className="visitorLog__button"
        onClick={event => event.stopPropagation()}
      >
        Sign out
      </Button>
    );
  }
  return formatTime(timeOut);
};

const renderLogs = (logs, onItemClick) => {
  const result = [];
  Object.keys(logs).forEach((key) => {
    /* eslint-disable */
    result.push(
      <tr
        key={logs[key].id}
        className="visitorLog__log"
        onClick={onItemClick(logs[key].id)}
      >
        <td className="visitorLog__info">{logs[key].cardNumber}</td>
        <td className="visitorLog__info">{logs[key].visitorName}</td>
        <td className="visitorLog__info">{logs[key].hostName}</td>
        <td className="visitorLog__info">{formatTime(logs[key].timeIn)}</td>
        <td className="visitorLog__info">
          {renderTimeOut(logs[key].timeOut)}
        </td>
      </tr>
    );
    /* eslint-enable */
  });

  return result;
};

const VisitorLog = props => (
  <table className="visitorLog">
    <thead className="visitorLog__header">
      <tr>
        <th className="visitorLog__info">Card No.</th>
        <th className="visitorLog__info">Visitor</th>
        <th className="visitorLog__info">Host</th>
        <th className="visitorLog__info">Time in</th>
        <th className="visitorLog__info">Time out</th>
      </tr>
    </thead>
    <tbody className="visitorLog__logs">
      {renderLogs(props.logs, props.onItemClick)}
    </tbody>
  </table>
);


// id: PropTypes.string.isRequired,
// cardNumber: PropTypes.string.isRequired,
// visitorName: PropTypes.string.isRequired,
// hostName: PropTypes.string.isRequired,
// timeIn: PropTypes.string.isRequired,
// timeOut: PropTypes.string.isRequired,

VisitorLog.defaultProps = {
  onItemClick: () => {},
};

VisitorLog.propTypes = {
  logs: PropTypes.shape({}).isRequired,
  onItemClick: PropTypes.func,
};

const mapStateToProps = state => ({
  logs: state.visitorLogs.logs,
});

export default connect(mapStateToProps, null)(VisitorLog);
