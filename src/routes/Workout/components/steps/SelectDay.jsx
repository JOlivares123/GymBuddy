import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import { Carousel, WorkoutTile } from "../../../../components";
import "./SelectDay.scss";

export const SelectDay = ({
  program,
  next,
  prev,
  setSelectedProgram,
  selectedProgramDayTitles,
  setSelectedProgramDayTitles,
  setSelectedDay,
  setCompletedWorkouts,
}) => {
  const { days } = program;

  const returnToFirstStep = () => {
    // update step, selectedProgramDayTitles, selectedProgram state
    prev();
    setSelectedProgram(null);
    setSelectedProgramDayTitles([]);
  };

  const addIsDoneAttr = (selectedDay) => {
    // add new attribute to selectedDay var
    for (var indx in selectedDay.workouts_needed) {
      var item = selectedDay.workouts_needed[indx];
      item.isDone = false;
    }

    // add isDone attribute to cardio object if present
    // will always use 0th index for cardio
    if (selectedDay.cardio?.name) {
      selectedDay.cardio.isDone = false;
    }
  };

  const continueToThirdStep = (dayId, tileTitle) => {
    var selected = days
      .filter((day) => {
        return day.id === dayId;
      })
      .pop();

    // add tileTitle to selected var so I can easily access it in the 3rd step
    var colonIndx = tileTitle.indexOf(":");
    // add 2 to remove the ': ' chars from tileTitle
    selected.dayTitle = tileTitle.slice(colonIndx + 2);

    // update completedWorkouts state var to be an array filled with false
    var falses = [];
    for (var i = 0; i < selected.workouts_needed.length; i++) {
      falses.push(false);
    }
    if (selected?.cardio?.name) {
      falses.push(false);
    }
    setCompletedWorkouts(falses);

    // add new attributes and set selectedDay var
    addIsDoneAttr(selected);
    setSelectedDay(selected);

    next();
  };
  return (
    <div className="d-block pt-5">
      <div
        onClick={() => returnToFirstStep()}
        className="text-start back-hover back-width pb-1"
      >
        <IoArrowBackCircleSharp color="#EBAA28" size={30} />
      </div>
      <h2 className="fw-bold pb-2"> Select Day </h2>
      <h3 className="fw-bold pb-4 yellow">{program.name}</h3>
      <br />
      <Carousel>
        {days.map((day, indx) => {
          const { workouts_needed } = day;

          // join workouts_needed into a string instead of array
          const tileItems = workouts_needed.map((wo) => {
            return wo.workout_name.length > 1
              ? wo.workout_name.join(" + ")
              : wo.workout_name[0];
          });

          // check if cardio is present and if it is, append it to tile_items
          if (day?.cardio?.name) {
            tileItems.push(`Cardio: ${day.cardio.name}`);
          }

          const tileTitle = selectedProgramDayTitles[indx];
          return (
            <div className="d-flex justify-content-center" key={day.id}>
              <WorkoutTile
                title={tileTitle}
                items={tileItems}
                onClick={() => continueToThirdStep(day.id, tileTitle)}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

SelectDay.propTypes = {
  program: PropTypes.object,
  next: PropTypes.func,
  prev: PropTypes.func,
  setSelectedProgram: PropTypes.func,
  selectedProgramDayTitles: PropTypes.arrayOf(PropTypes.string),
  setSelectedProgramDayTitles: PropTypes.func,
  setSelectedDay: PropTypes.func,
  setCompletedWorkouts: PropTypes.func,
};
