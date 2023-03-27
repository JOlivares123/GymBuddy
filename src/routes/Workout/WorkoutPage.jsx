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
  // TODO: create state var that will hold log info to post to DB
  // const [logData, setLogData] = useState(null);
  const [step, setStep] = useState(1);
  // used to keep track how many sets have been performed throughout workout
  // const [numSets, setNumSets] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [restTime, setRestTime] = useState(0);
  // gets set in 1st step then used(read) in second step.
  const [selectedProgramDayTitles, setSelectedProgramDayTitles] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [currentWorkoutSets, setCurrentWorkoutSets] = useState(0);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [isCardio, setIsCardio] = useState(false);

  const selectProgram = (programId) => {
    var selected = programs
      .filter((program) => {
        return program.id === programId;
      })
      .pop();
    // extract restTime from selectedProgram + convert rest_duration from
    // rest time in seconds
    setRestTime(selected.rest_duration);
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
            setSelectedProgramDayTitles={setSelectedProgramDayTitles}
          />
        );
      case 2:
        return (
          <SelectDay
            program={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            next={nextStep}
            prev={prevStep}
            selectedProgramDayTitles={selectedProgramDayTitles}
            setSelectedProgramDayTitles={setSelectedProgramDayTitles}
            setSelectedDay={setSelectedDay}
            setCompletedWorkouts={setCompletedWorkouts}
          />
        );
      case 3:
        return (
          <SelectWorkout
            selectedDay={selectedDay}
            next={nextStep}
            prev={prevStep}
            completedWorkouts={completedWorkouts}
            setCompletedWorkouts={setCompletedWorkouts}
            setSelectedDay={setSelectedDay}
            selectedWorkout={selectedWorkout}
            setSelectedWorkout={setSelectedWorkout}
            setIsCardio={setIsCardio}
          />
        );
      case 4:
        return (
          <Rest
            next={nextStep}
            prev={prevStep}
            selectedWorkout={selectedWorkout}
            setSelectedWorkout={setSelectedWorkout}
            completedWorkouts={completedWorkouts}
            setCompletedWorkouts={setCompletedWorkouts}
            currentWorkoutSets={currentWorkoutSets}
            setCurrentWorkoutSets={setCurrentWorkoutSets}
            isCardio={isCardio}
            setIsCardio={setIsCardio}
            restTime={restTime}
          />
        );
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
