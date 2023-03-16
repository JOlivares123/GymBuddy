import PropTypes from "prop-types";

import { CustButton } from "../Button/CustButton";
import "./WorkoutTile.scss";

export const WorkoutTile = ({ title, items, showEdit = false, onClick }) => {
  return (
    <div className={`Tile TileAboveMobile TileMobile d-flex`}>
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
        {showEdit && (
          <div className="pt-1">
            <u>Edit</u>
          </div>
        )}
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
