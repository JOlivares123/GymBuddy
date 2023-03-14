import { useState } from "react";

import {
  PerformWorkout,
  Rest,
  SelectDay,
  SelectProgram,
  SelectWorkout,
} from "./components";
// mock data until backend is built
import { data } from "./data";

export const WorkoutPage = () => {
  const [step, setStep] = useState(1);
  console.log(data);

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <SelectProgram />;
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
  return (
    <div>
      hello workout page - main
      {renderCurrentStep()}
    </div>
  );
};
