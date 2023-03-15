import PropTypes from "prop-types";

import { Carousel, CustButton, WorkoutTile } from "./../../../../components";

export const SelectProgram = ({ myPrograms, next, selectProgram }) => {
  console.log(myPrograms);
  return (
    <div className="d-block pt-5">
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
          muscles = muscles.map((group) => {
            return group.join(", ");
          });
          console.log(muscles);

          return (
            <div className="d-flex justify-content-center" key={program.id}>
              <WorkoutTile
                title={program.name}
                items={muscles}
                showEdit={true}
                onClick={() => {
                  selectProgram(program.id);
                  next();
                }}
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
};
