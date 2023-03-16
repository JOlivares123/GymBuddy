import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { Carousel, CustButton, WorkoutTile } from "./../../../../components";

export const SelectProgram = ({
  myPrograms,
  next,
  selectProgram,
  setSelectedProgramDayTitles,
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
      <div onClick={() => returnHome()} className="text-start back-hover">
        <IoArrowBackCircleSharp color="#EBAA28" size={28} />
      </div>
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
          text="Create New Program"
          color="yellow"
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
  setSelectedProgramDayTitles: PropTypes.func,
};
