import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import {
  BackArrow,
  Carousel,
  CustButton,
  WorkoutTile,
} from "./../../../../components";

export const SelectProgram = ({
  myPrograms,
  next,
  selectProgram,
  setSelectedProgramDayTitles,
  goToCreateWorkout,
}) => {
  const navigate = useNavigate();
  //handles logic to navigate home is back button pressed
  const returnHome = () => {
    navigate("/home");
  };
  // handles logic for continuing flow
  const continueToSecondStep = (programId, muscles) => {
    selectProgram(programId);
    next();
    // save titles to use in second step
    setSelectedProgramDayTitles(muscles);
  };

  return (
    <div className="d-block pt-5">
      <BackArrow onClick={() => returnHome()} />
      <h2 className="fw-bold pb-4">Select Workout Program</h2>
      <br />
      <Carousel>
        {myPrograms.map((program) => {
          var muscles = program.days.map((day) => {
            return day.workouts_needed.flatMap((wo) => {
              return wo.muscles_worked;
            });
          });
          // extract all unique values of muscles worked out to display
          muscles = muscles.map((group) => {
            return Array.from(new Set(group));
          });
          //   join every list inside muscles to make one string
          muscles = muscles.map((group, indx) => {
            var musclesJoined = group.join(", ");
            // append copy
            return `Day ${indx + 1}: ${musclesJoined}`;
          });

          return (
            <div className="d-flex justify-content-center" key={program.id}>
              <WorkoutTile
                title={program.name}
                items={muscles}
                showEdit={true}
                onClick={() => continueToSecondStep(program.id, muscles)}
              />
            </div>
          );
        })}
      </Carousel>
      <div className="mt-5">
        <CustButton
          text="Create Program"
          color="pink"
          onClick={() => goToCreateWorkout()}
          className="mt-5 btn-lg"
        />
      </div>
    </div>
  );
};

SelectProgram.propTypes = {
  myPrograms: PropTypes.arrayOf(PropTypes.object),
  next: PropTypes.func,
  selectProgram: PropTypes.func,
  goToCreateWorkout: PropTypes.func,
  setSelectedProgramDayTitles: PropTypes.func,
};
