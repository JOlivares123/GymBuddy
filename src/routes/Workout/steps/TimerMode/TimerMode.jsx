import PropTypes from "prop-types";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect } from "react";

import "./TimerMode.scss";

const renderTime = ({ remainingTime }) => {
  const mins = Math.floor((remainingTime % 3600) / 60);
  const secs = remainingTime % 60;

  // adding extra 0s where needed
  return (
    <div className="timer">
      <h1>{`${mins < 10 && "0"}${mins}:${secs < 10 ? "0" : ""}${secs}`}</h1>
    </div>
  );
};

export const TimerMode = ({ prev, restTimeSecs }) => {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  // use prev(2) to navigate back to Rest.jsx
  return (
    <>
      <h1 className="fw-bold my-5">Resting Time</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          size={300}
          strokeWidth={16}
          isPlaying={true}
          colors={["#EB4828", "#EB286A", "#EBAA28", "#6E9887", "#386641"]}
          colorsTime={[
            restTimeSecs / 4,
            (restTimeSecs / 4) * 3,
            (restTimeSecs / 4) * 2,
            restTimeSecs / 4,
            0,
          ]}
          duration={restTimeSecs}
          onComplete={() => prev(2)}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
};

TimerMode.propTypes = {
  prev: PropTypes.func,
  restTimeSecs: PropTypes.number,
};
