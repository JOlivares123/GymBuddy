import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import {
  HomePage,
  LandingPage,
  LoginPage,
  ProfilePage,
  SignupPage,
  StatsPage,
  WorkoutPage,
  CreateWorkout,
} from "./routes";
import "./App.scss";

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="App-container">
      <Routes>
        <Route
          path="/"
          element={!user ? <LandingPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to="/" />}
        />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/workout"
          element={user ? <WorkoutPage /> : <Navigate to="/" />}
        />
        <Route
          path="/workout/create-workout"
          element={user ? <CreateWorkout /> : <Navigate to="/" />}
        />
        <Route
          path="/stats"
          element={user ? <StatsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
};

export default App;
