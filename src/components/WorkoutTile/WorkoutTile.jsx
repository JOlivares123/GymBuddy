import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";

import { CustButton } from "../Button/CustButton";
import "./WorkoutTile.scss";

export const WorkoutTile = ({ title, items, showEdit = false, onClick }) => {
  return (
    <div
      className={
        (showEdit ? "TileWEdit" : "TileWOEdit") +
        ` Tile TileAboveMobile TileMobile d-flex`
      }
    >
      {showEdit && (
        <div className="ms-auto back-hover">
          <FiEdit size={20} />
        </div>
      )}
      <h3 className="fw-bold">{title}</h3>

      <div className="text-start Items">
        {items.map((item, indx) => {
          return <li key={indx}>{item}</li>;
        })}
      </div>

      <div>
        <CustButton
          className="px-4"
          text="Select"
          color="yellow"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

WorkoutTile.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  showEdit: PropTypes.bool,
  onClick: PropTypes.func,
};
