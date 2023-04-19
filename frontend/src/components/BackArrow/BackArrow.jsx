import PropTypes from "prop-types";

import { IoArrowBackCircleSharp } from "react-icons/io5";

export const BackArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="text-start back-hover back-width mb-4">
      <IoArrowBackCircleSharp color="#EBAA28" size={30} />
    </div>
  );
};
BackArrow.propTypes = {
  onClick: PropTypes.func,
};
