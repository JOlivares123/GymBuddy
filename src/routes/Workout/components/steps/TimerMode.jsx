import PropTypes from "prop-types";

export const TimerMode = ({ prev, restTimeSecs }) => {
  console.log(prev);
  // use prev(2) to navigate back to Rest.jsx
  return <div>time out now for {restTimeSecs / 60} mins</div>;
};

TimerMode.propTypes = {
  prev: PropTypes.func,
  restTimeSecs: PropTypes.number,
};
