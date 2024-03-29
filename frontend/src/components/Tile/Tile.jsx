import PropTypes from "prop-types";

import { CustButton } from "../Button/CustButton";
import "./Tile.scss";

export const Tile = ({
  title,
  link,
  desc,
  buttonTxt,
  className,
  buttonColor,
}) => {
  return (
    <div className={`Tile TileAboveMobile TileMobile d-flex ${className}`}>
      <h3 className={buttonColor}>{title}</h3>
      <p className="pb-1">{desc}</p>
      <CustButton
        color={buttonColor}
        className="px-5"
        text={buttonTxt}
        link={link}
      />
    </div>
  );
};

Tile.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  desc: PropTypes.string,
  buttonTxt: PropTypes.string,
  className: PropTypes.string,
  buttonColor: PropTypes.color,
};
