import { useNavigate } from "react-router-dom";

import { BackArrow } from "../../components";

export const CreateWorkout = () => {
  const navigate = useNavigate();

  const goBackToSelectProgram = () => {
    navigate("/workout");
  };

  return (
    <div className="d-block pt-5">
      <BackArrow onClick={() => goBackToSelectProgram()} />
      hello create workout
    </div>
  );
};
