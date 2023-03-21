import PropTypes from "prop-types";

export const GoalDisplay = ({ isCardio, goal }) => {
  return (
    <div className="GoalContainer">
      {isCardio ? (
        <div>{goal.duration}</div>
      ) : (
        <div>
          <div>{goal.sets}</div>
          <div>{`${goal.min_reps}-${goal.max_reps}`}</div>
          <div>{goal.weight}</div>
        </div>
      )}
    </div>
  );
};

GoalDisplay.propTypes = {
  isCardio: PropTypes.bool,
  goal: PropTypes.object,
};
