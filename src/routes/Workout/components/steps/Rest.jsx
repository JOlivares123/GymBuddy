import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { GoalDisplay } from "../../../../components";

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
      <h2 onClick={() => completeWorkout()} className="fw-bold pb-2">
        {isCardio ? selectedWorkout.name : selectedWorkout.completeWorkoutName}
      </h2>
      <div>
        {isCardio ? (
          <GoalDisplay goal={{ duration: 10 }} isCardio={isCardio} />
        ) : (
          selectedWorkout.goal.map((goal, indx) => {
            return <GoalDisplay key={indx} goal={goal} isCardio={isCardio} />;
          })
        )}
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
