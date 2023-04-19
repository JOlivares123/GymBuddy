import PropTypes from "prop-types";

import { Carousel, WorkoutTile, BackArrow } from "../../../../components";
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

  //  TODO: Review if this is needed
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

    // save selectedDay
    setSelectedDay(selected);

    next();
  };
  return (
    <div className="d-block pt-5">
      <BackArrow onClick={() => returnToFirstStep()} />
      <h2 className="fw-bold pb-2"> Select Day </h2>
      <h3 className="fw-bold pb-4 yellow">{program.name}</h3>
      <br />
      <Carousel>
        {days.map((day, indx) => {
          const { workouts_needed } = day;

          // extract titles
          const tileItems = workouts_needed.map((wo) => {
            return wo.workout_name;
          });

          // check if cardio is present and if it is, append it to
          // tile_items @ index 0
          if (day?.cardio?.name) {
            tileItems.unshift(`Cardio: ${day.cardio.name}`);
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
