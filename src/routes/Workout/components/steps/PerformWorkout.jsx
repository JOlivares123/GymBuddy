import PropTypes from "prop-types";
import { useState } from "react";

import { CustButton } from "../../../../components";

export const PerformWorkout = ({
  next,
  prev,
  step,
  goal,
  currentWorkoutSets,
  setCurrentWorkoutSets,
  isCardio,
  setIsCardio,
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
  const [currReps, setCurrReps] = useState(0.0);
  const generateGoalText = () => {
    return isCardio
      ? `${(goal.duration / 60).toFixed(2)} mins`
      : `${goal.min_reps} - ${goal.max_reps}`;
  };

  // if isCardio is true, then we send the user to the SelectWorkout page
  // if not, then we send the user to the TimerMode page
  const goToNextStep = () => {
    // send user to SelectWorkout page if they finish cardio OR if they complete the goal for their workout
    if (isCardio) {
      prev(2);
      // need to update isCardio state
      setIsCardio(false);
      // need to make cardio finished after
      // need to update currentWorkoutSets
      setCurrentWorkoutSets(0);
    } else {
      next();
    }
  };
  return (
    <div className="d-block pt-5">
      <h2>Set {currentWorkoutSets}</h2>
      <h3 className="mt-3">Goal: {generateGoalText()}</h3>
      <div className="my-5">
        <h3>{isCardio ? "Enter Duration" : "Enter Reps"}</h3>
        <input
          value={currReps}
          onChange={(e) => setCurrReps(e.target.value)}
          type="number"
          step={0.01}
          pattern="[0-9]*"
          inputMode="numeric"
          className="mt-1 TransparentInput white"
        ></input>
      </div>
      <CustButton
        disabled={currReps > 0 ? false : true}
        className="btn-lg w-50"
        text="COMPLETE SET"
        color="yellow"
        onClick={() => goToNextStep()}
      />
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
  setIsCardio: PropTypes.func,
};
