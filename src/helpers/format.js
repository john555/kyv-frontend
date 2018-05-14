import moment from 'moment';

export const formatTime = timeString => (
  timeString === '' ? '--:--' : moment(timeString).format('h:mm A')
);

export default {
  formatTime,
};
