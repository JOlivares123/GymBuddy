import { useState } from "react";
import PropTypes from "prop-types";

import {
  PerformWorkout,
  Rest,
  SelectDay,
  SelectProgram,
  SelectWorkout,
} from "./components";
// mock data until backend is built
import { data } from "./data";

export const WorkoutPage = ({ programs = data.programs }) => {
  const [step, setStep] = useState(1);
  // used to keep track how many sets have been performed throughout workout
  // const [numSets, setNumSets] = useState(0);
  // const [selectedProgram, setSelectedProgram] = useState(null);
  // const [selectedDay, setSelectedDay] = useState(null);
  // const [selectedWorkout, setSelectedWorkout] = useState(null);
  // const [completedWorkouts, setCompletedWorkouts] = useState(null);
  console.log(programs, setStep);

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <SelectProgram myPrograms={programs} />;
      case 2:
        return <SelectDay />;
      case 3:
        return <SelectWorkout />;
      case 4:
        return <Rest />;
      case 5:
        return <PerformWorkout />;
      default:
    }
  };
  return <>{renderCurrentStep(programs)}</>;
};

WorkoutPage.propTypes = {
  programs: PropTypes.array,
};
