import PropTypes from "prop-types";

import "./GoalDisplay.scss";

export const GoalDisplay = ({ isCardio, goal }) => {
  const convertSecsToMins = () => {
    if (isCardio) {
      // limit the number of decimal pts shown if any
      return parseFloat((goal.duration / 60).toFixed(2));
    }
  };
  return (
    <div className="pt-5">
      <div className="GoalContainer">
        {isCardio ? (
          <>
            <h5 className="CardioTitle">Duration</h5>
            <h2 className="CardioTime yellow">{convertSecsToMins()} mins</h2>
          </>
        ) : (
          <>
            <h5 className="RepsTitle">Reps</h5>
            <h5 className="SetsTitle">Sets</h5>
            <h5 className="WeightTitle">Weight</h5>
            <h2 className="RepsCol yellow">{`${goal.min_reps} - ${goal.max_reps}`}</h2>
            <h2 className="SetsCol yellow">{goal.sets}</h2>
            <h2 className="WeightCol yellow">{goal.weight} lbs</h2>
          </>
        )}
      </div>
    </div>
  );
};

GoalDisplay.propTypes = {
  isCardio: PropTypes.bool,
  goal: PropTypes.object,
};
