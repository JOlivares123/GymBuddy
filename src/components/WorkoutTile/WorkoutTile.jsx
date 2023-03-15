import PropTypes from "prop-types";

import { CustButton } from "../Button/CustButton";
import "./WorkoutTile.scss";

export const WorkoutTile = ({ title, items, showEdit = false, onClick }) => {
  console.log(showEdit);
  return (
    <div className={`Tile TileAboveMobile TileMobile d-flex`}>
      <h3 className="fw-bold">{title}</h3>
      <div className="text-start">
        {items.map((item, indx) => {
          return (
            <li className="pb-1" key={indx}>{`Day ${indx + 1}: ${item}`}</li>
          );
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
