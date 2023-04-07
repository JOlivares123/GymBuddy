import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import { CustButton, WorkoutItem } from "../../../../components";

const CARDIO_INDEX = 0;

export const SelectWorkout = ({
  selectedDay,
  next,
  prev,
  setSelectedDay,
  completedWorkouts,
  setCompletedWorkouts,
  setSelectedWorkout,
  setIsCardio,
}) => {
  const returnToSecondStep = () => {
    // add alert first to make sure
    if (confirm("Are you sure you want to abandon your current workout?")) {
      // update step, setSelectedWorkout, setCompletedWorkouts, selectedDay state
      setSelectedDay(null);
      setSelectedWorkout(null);
      setCompletedWorkouts([]);
      prev();
    }
  };

  const continueToFourthStep = (workoutObj, index, isCardio) => {
    // update state to denote cardio mode
    if (isCardio) {
      setIsCardio(true);
    }
    // add index attribute to workoutObj
    workoutObj.index = index;
    setSelectedWorkout(workoutObj);
    next();
  };

  const areWorkoutsIncomplete = () => {
    for (var i = 0; i < completedWorkouts.length; i++) {
      if (!completedWorkouts[i]) {
        return true;
      }
    }
    return false;
  };

  // once an workout is completed, I should disable the onClick for that WorkoutItem
  // to avoid the error
  return (
    <div className="d-block pt-5">
      <div
        onClick={() => returnToSecondStep()}
        className="text-start back-hover back-width pb-1"
      >
        <IoArrowBackCircleSharp color="#EBAA28" size={30} />
      </div>
      <h2 className="fw-bold pb-2">{`Today's Workout`}</h2>
      <h3 className="fw-bold pb-4 yellow">{selectedDay.dayTitle}</h3>
      <div>
        {selectedDay?.cardio?.name && (
          <WorkoutItem
            key={CARDIO_INDEX}
            itemText={selectedDay.cardio.name}
            isComplete={completedWorkouts[CARDIO_INDEX]}
            onClick={() => {
              !completedWorkouts[CARDIO_INDEX] &&
                continueToFourthStep(selectedDay.cardio, CARDIO_INDEX, true);
            }}
          />
        )}
        {selectedDay.workouts_needed.map((wo, indx) => {
          var workout_name = wo.workout_name;
          // append concatted workoutNames to object for next step
          wo.completeWorkoutName = workout_name;
          var workoutIndx = selectedDay?.cardio?.name ? indx + 1 : indx;
          return (
            <WorkoutItem
              key={workoutIndx}
              itemText={workout_name}
              isComplete={completedWorkouts[workoutIndx]}
              onClick={() => {
                !completedWorkouts[workoutIndx] &&
                  continueToFourthStep(wo, workoutIndx, false);
              }}
            />
          );
        })}
      </div>
      <br />
      <div className="py-5">
        <CustButton
          disabled={areWorkoutsIncomplete()}
          link={"/home"}
          className="btn-lg col-8 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          color="yellow"
          text="COMPLETE SESSION"
        />
      </div>
    </div>
  );
};

SelectWorkout.propTypes = {
  selectedDay: PropTypes.object,
  next: PropTypes.func,
  prev: PropTypes.func,
  setSelectedDay: PropTypes.func,
  completedWorkouts: PropTypes.arrayOf(PropTypes.bool),
  setCompletedWorkouts: PropTypes.func,
  setSelectedWorkout: PropTypes.func,
  setIsCardio: PropTypes.func,
};
