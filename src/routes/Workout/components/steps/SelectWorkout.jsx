import PropTypes from "prop-types";

export const SelectWorkout = ({ selectedDay, next, prev }) => {
  console.log(selectedDay, next, prev);
  return (
    <div>
      step 3 - select workout
      <h2>Target Muscles: fjfjf</h2>
    </div>
  );
};

SelectWorkout.propTypes = {
  selectedDay: PropTypes.object,
  next: PropTypes.func,
  prev: PropTypes.func,
};
