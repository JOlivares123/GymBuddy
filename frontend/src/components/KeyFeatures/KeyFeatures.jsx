import { RxLapTimer } from "react-icons/rx";
import { BiDumbbell } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import "./KeyFeatures.scss";
import { isMobile } from "../../utils/WindowSize";

export const KeyFeatures = () => {
  return (
    <div className="key-features-container pb-5">
      <h1 className="main-text">Key Features</h1>
      <div
        className={`mt-4 w-100 d-flex ${
          isMobile()
            ? "flex-column align-items-center"
            : "flex-row flex-wrap justify-content-around"
        }`}
      >
        <div className="feature feature-sm feature-md-above">
          <BiDumbbell color="#EB4828" className="mb-3" size={70} />
          <h5>Workout Tracker</h5>
        </div>
        <div className={"feature feature-sm feature-md-above"}>
          <RxLapTimer color="#EB4828" className="mb-3" size={60} />
          <h5>Timed Resting Period</h5>
        </div>
        <div className={"feature feature-sm feature-md-above"}>
          <ImStatsDots color="#EB4828" className="mb-3" size={60} />
          <h5>Program-based Stats</h5>
        </div>
      </div>
    </div>
  );
};
