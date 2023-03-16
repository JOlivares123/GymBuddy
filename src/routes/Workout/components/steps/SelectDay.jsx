import PropTypes from "prop-types";

import { Carousel, WorkoutTile } from "../../../../components";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./SelectDay.scss";

export const SelectDay = ({
  program,
  next,
  prev,
  setSelectedProgram,
  selectedProgramDayTitles,
  setSelectedProgramDayTitles,
  setSelectedDay,
}) => {
  const { days } = program;

  const returnToFirstStep = () => {
    // update step, selectedProgramDayTitles, selectedProgram state
    prev();
    setSelectedProgram(null);
    setSelectedProgramDayTitles([]);
  };

  const continueToThirdStep = (dayId) => {
    var selected = days
      .filter((day) => {
        return day.id === dayId;
      })
      .pop();

    setSelectedDay(selected);
    next();
  };
  return (
    <div className="d-block pt-5">
      <div
        onClick={() => returnToFirstStep()}
        className="text-start back-hover"
      >
        <IoArrowBackCircleSharp color="#EBAA28" size={28} />
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
                onClick={() => continueToThirdStep(day.id)}
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
};
