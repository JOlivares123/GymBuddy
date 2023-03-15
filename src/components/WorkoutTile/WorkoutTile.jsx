import PropTypes from "prop-types";

import "./WorkoutTile.scss";

export const WorkoutTile = ({ title, items, showEdit = false }) => {
  console.log(showEdit);
  return (
    <div className={`Tile TileAboveMobile TileMobile d-flex`}>
      <h3>{title}</h3>
      <div className="text-start">
        {items.map((item, indx) => {
          return <p key={indx}>{item}</p>;
        })}
      </div>

      <div>hello buttons here</div>
    </div>
  );
};

WorkoutTile.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  showEdit: PropTypes.bool,
};
