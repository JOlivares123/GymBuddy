import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  LandingPage,
  LoginPage,
  ProfilePage,
  SignupPage,
  StatsPage,
  WorkoutPage,
} from "./routes";
import "./App.scss";

const App = () => {
  return (
    <div className="App-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
