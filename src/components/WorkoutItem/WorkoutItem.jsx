import PropTypes from "prop-types";
import { IoChevronForwardCircle } from "react-icons/io5";

import "./WorkoutItem.scss";

export const WorkoutItem = ({ itemText, isComplete }) => {
  console.log(itemText);
  return (
    <div
      className={`Item back-hover ms-auto me-auto ${
        isComplete ? "complete" : "incomplete"
      }`}
    >
      <div className="d-flex w-100 justify-content-evenly align-items-center">
        <h5 className="txtHeight fw-bold text-start col-8">{itemText}</h5>
        <IoChevronForwardCircle size={30} />
      </div>
    </div>
  );
};

WorkoutItem.propTypes = {
  itemText: PropTypes.string,
  isComplete: PropTypes.bool,
};
