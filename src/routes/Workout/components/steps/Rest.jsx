import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { CustButton, GoalDisplay } from "../../../../components";

export const Rest = ({
  next,
  prev,
  selectedWorkout,
  setSelectedWorkout,
  completedWorkouts,
  setCompletedWorkouts,
  currentWorkoutSets,
  setCurrentWorkoutSets,
  isCardio,
  setIsCardio,
  restTime,
}) => {
  console.log(
    selectedWorkout,
    completedWorkouts,
    currentWorkoutSets,
    isCardio,
    restTime
  );
  const returnToThirdStep = () => {
    console.log(
      next,
      prev,
      selectedWorkout,
      setSelectedWorkout,
      completedWorkouts,
      setCompletedWorkouts,
      currentWorkoutSets,
      setCurrentWorkoutSets,
      setIsCardio
    );
    // update isCardio state to avoid errors with title
    if (isCardio) {
      setIsCardio(false);
    }
    // update selectedWorkout state var
    setSelectedWorkout(null);
    prev();
  };

  const completeWorkout = () => {
    // update completedWorkouts state array
    const updatedCompletedWorkouts = completedWorkouts.map((val, indx) => {
      if (indx === selectedWorkout.index) {
        return true;
      }
      return val;
    });
    setCompletedWorkouts(updatedCompletedWorkouts);
    // update currentWorkoutSets
    setCurrentWorkoutSets(0);
    // reuse logic
    returnToThirdStep();
  };

  const startSet = () => {
    // update currentWorkoutSets
    setCurrentWorkoutSets(currentWorkoutSets++);
    // move user to next step - PerformWorkout
    next();
  };

  const canExit = () => {
    if (isCardio) {
      return true;
    }
    if (currentWorkoutSets === selectedWorkout.goal.sets) {
      return true;
    }
    return false;
  };

  return (
    <div className="d-block pt-5">
      {currentWorkoutSets == 0 && (
        <div
          onClick={() => returnToThirdStep()}
          className="text-start back-hover back-width pb-1"
        >
          <IoArrowBackCircleSharp color="#EBAA28" size={30} />
        </div>
      )}
      <h2 className="fw-bold pb-2 pt-3">
        {isCardio ? selectedWorkout.name : selectedWorkout.completeWorkoutName}
      </h2>
      {isCardio ? (
        <GoalDisplay goal={selectedWorkout} isCardio={isCardio} />
      ) : (
        <GoalDisplay goal={selectedWorkout.goal} isCardio={isCardio} />
      )}
      <div className="pt-5">
        <h4>Completed Sets:</h4>
        <h2 className="yellow">{currentWorkoutSets}</h2>
        <CustButton
          text="Start Set"
          color="yellow"
          className="btn-lg mt-3 w-50"
          onClick={() => startSet()}
        />
      </div>
      <div className="mt-5">
        <CustButton
          text="DONE"
          onClick={() => completeWorkout()}
          color="yellow"
          className="mt-5 btn-lg w-75 py-2"
          disabled={!canExit()}
        />
      </div>
    </div>
  );
};

Rest.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  selectedWorkout: PropTypes.object,
  setSelectedWorkout: PropTypes.func,
  completedWorkouts: PropTypes.array,
  setCompletedWorkouts: PropTypes.func,
  currentWorkoutSets: PropTypes.number,
  setCurrentWorkoutSets: PropTypes.func,
  isCardio: PropTypes.bool,
  setIsCardio: PropTypes.func,
  restTime: PropTypes.number,
};
