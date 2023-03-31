import PropTypes from "prop-types";

export const PerformWorkout = ({
  next,
  prev,
  step,
  goal,
  currentWorkoutSets,
  setCurrentWorkoutSets,
  isCardio,
}) => {
  console.log(
    next,
    prev,
    step,
    goal,
    currentWorkoutSets,
    setCurrentWorkoutSets,
    isCardio
  );
  return (
    <div>
      step 5 - workout
      <div>Set {currentWorkoutSets}</div>
    </div>
  );
};

PerformWorkout.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  step: PropTypes.number,
  goal: PropTypes.object,
  currentWorkoutSets: PropTypes.number,
  setCurrentWorkoutSets: PropTypes.func,
  isCardio: PropTypes.bool,
};
