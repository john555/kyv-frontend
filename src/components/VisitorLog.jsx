import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/common/Button';

const renderLogs = (logs, onItemClick) => logs.map(log => (
  <tr
    key={log.id}
    className="visitorLog__log"
    onClick={onItemClick}
  >
    <td className="visitorLog__info">{log.cardNumber}</td>
    <td className="visitorLog__info">{log.visitorName}</td>
    <td className="visitorLog__info">{log.hostName}</td>
    <td className="visitorLog__info">10:03 AM</td>
    <td className="visitorLog__info">
      <Button className="visitorLog__button">Sign out</Button>
    </td>
  </tr>
));

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

VisitorLog.defaultProps = {
  onItemClick: () => {},
};

VisitorLog.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    visitorName: PropTypes.string.isRequired,
    hostName: PropTypes.string.isRequired,
    timeIn: PropTypes.string.isRequired,
    timeOut: PropTypes.string.isRequired,
  })).isRequired,
  onItemClick: PropTypes.func,
};

const mapStateToProps = state => ({
  logs: state.visitorLogs.logs,
});

export default connect(mapStateToProps, null)(VisitorLog);
