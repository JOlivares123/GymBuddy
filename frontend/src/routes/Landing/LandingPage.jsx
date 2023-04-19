import { CustButton, Hero, KeyFeatures } from "../../components";
import "./LandingPage.scss";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <br />
      {/* temp button to test out func on mobile */}
      <CustButton
        link={"/home"}
        className="btn-lg"
        text={"Temp: Check out logged in experience"}
      />
      <KeyFeatures />
    </>
  );
};