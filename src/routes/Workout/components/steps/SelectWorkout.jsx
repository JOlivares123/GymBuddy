import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import { CustButton, WorkoutItem } from "../../../../components";

export const SelectWorkout = ({
  selectedDay,
  next,
  prev,
  setSelectedDay,
  completedWorkouts,
  setCompletedWorkouts,
  setSelectedWorkout,
  selectedWorkout,
}) => {
  console.log(setCompletedWorkouts, selectedWorkout);

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

  const continueToFourthStep = (workoutObj) => {
    next();
    setSelectedWorkout(workoutObj);
  };

  const areWorkoutsIncomplete = () => {
    for (var i = 0; i < completedWorkouts.length; i++) {
      if (!completedWorkouts[i]) {
        return true;
      }
    }
    return false;
  };

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
            key={0}
            itemText={selectedDay.cardio.name}
            isComplete={selectedDay.cardio.isDone}
            onClick={() => continueToFourthStep(selectedDay.cardio)}
          />
        )}
        {selectedDay.workouts_needed.map((wo, indx) => {
          // append workout_name is there is more than one in array
          var workout_name = wo.workout_name.join(" + ");
          return (
            <WorkoutItem
              key={indx + 1}
              itemText={workout_name}
              isComplete={wo.isDone}
              onClick={() => continueToFourthStep(wo)}
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
  selectedWorkout: PropTypes.object,
};
