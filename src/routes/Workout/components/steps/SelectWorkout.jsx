import PropTypes from "prop-types";
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { CustButton, WorkoutItem } from "../../../../components";

export const SelectWorkout = ({ selectedDay, next, prev, setSelectedDay }) => {
  const [isCardioDone, setIsCardioDone] = useState(false);
  console.log(selectedDay, next, prev), setIsCardioDone;
  const returnToSecondStep = () => {
    // add alert first to make sure
    if (confirm("Are you sure you want to abandon your current workout?")) {
      // update step + selectedDaystate
      setSelectedDay(null);
      prev();
    }
  };
  // add in completed=false to workouts_needed var and use it to set the color of the item
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
            isComplete={isCardioDone}
          />
        )}
        {selectedDay.workouts_needed.map((wo, indx) => {
          return (
            <WorkoutItem
              key={indx + 1}
              itemText={wo.workout_name[0]}
              isComplete={false}
            />
          );
        })}
      </div>
      <br />
      <div className="py-5">
        <CustButton
          disabled={true}
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
};
