import PropTypes from "prop-types";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Continue Workout!</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export const TimerMode = ({ prev, restTimeSecs }) => {
  // use prev(2) to navigate back to Rest.jsx
  return (
    <div>
      <CountdownCircleTimer
        isPlaying={true}
        colors="#EBAA28"
        duration={restTimeSecs}
        onComplete={() => prev(2)}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

TimerMode.propTypes = {
  prev: PropTypes.func,
  restTimeSecs: PropTypes.number,
};
