import { useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <div
        onClick={() => navigate("/")}
        className="Header-hover d-flex flex-row align-items-center"
      >
        <img
          className="Header-logo w-100"
          alt="dumbbell logo"
          src="/logo48.png"
        />

        <h3 className="ps-2 Header-font w-100">Gym Bud</h3>
      </div>
    </header>
  );
};
