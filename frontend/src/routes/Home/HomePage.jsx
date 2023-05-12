import PropTypes from "prop-types";
// import { useEffect } from "react";
// import axios from "axios";

import { Tile } from "../../components/Tile/Tile";
import data from "./HomePageCopy.json";
import "./HomePage.scss";

export const HomePage = ({ name = "User" }) => {
  // can now fetch backend api endpoints
  // useEffect(() => {
  //   const loadData = async () => {
  //     const resp = await axios.get("http://localhost:3001/api");
  //     console.log(resp.data);
  //   };
  //   loadData();
  // }, []);
  return (
    <div>
      <h1 className="text-center text-sm-center text-md-start text-lg-start text-xl-start py-5">
        Welcome {name}
      </h1>
      <div className="d-flex TileContainer flex-md-row flex-lg-row flex-xl-row flex-sm-column flex-column">
        {data.map(({ buttonTxt, buttonColor, title, desc, link, key }) => {
          return (
            <Tile
              key={key}
              buttonTxt={buttonTxt}
              title={title}
              buttonColor={buttonColor}
              desc={desc}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
};
