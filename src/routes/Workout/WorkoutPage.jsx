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
  const [selectedProgram, setSelectedProgram] = useState(null);
  // const [selectedDay, setSelectedDay] = useState(null);
  // const [selectedWorkout, setSelectedWorkout] = useState(null);
  // const [completedWorkouts, setCompletedWorkouts] = useState(null);

  const selectProgram = (programId) => {
    var selected = programs
      .filter((program) => {
        return program.id === programId;
      })
      .pop();

    setSelectedProgram(selected);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectProgram
            next={nextStep}
            selectProgram={selectProgram}
            myPrograms={programs}
          />
        );
      case 2:
        return (
          <SelectDay
            program={selectedProgram}
            next={nextStep}
            prev={prevStep}
            step={step}
          />
        );
      case 3:
        return <SelectWorkout next={nextStep} prev={prevStep} step={step} />;
      case 4:
        return <Rest next={nextStep} prev={prevStep} step={step} />;
      case 5:
        return <PerformWorkout next={nextStep} prev={prevStep} step={step} />;
      default:
    }
  };
  return <>{renderCurrentStep(programs)}</>;
};

WorkoutPage.propTypes = {
  programs: PropTypes.array,
};
