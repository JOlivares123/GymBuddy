import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { CgNotes } from "react-icons/cg";
import { useEffect, useState } from "react";

import { BackArrow, CustButton, GoalDisplay } from "../../../../components";
import "./Rest.scss";

export const Rest = ({
  next,
  prev,
  selectedWorkout,
  setSelectedWorkout,
  completedWorkouts,
  setCompletedWorkouts,
  currentWorkoutSets,
  setCurrentWorkoutSets,
  isCardio,
  setIsCardio,
}) => {
  const [showNotes, setShowNotes] = useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  const returnToThirdStep = () => {
    // update isCardio state to avoid errors with title
    if (isCardio) {
      setIsCardio(false);
    }
    // update selectedWorkout state var
    setSelectedWorkout(null);
    prev();
  };

  const completeWorkout = () => {
    // update completedWorkouts state array
    const updatedCompletedWorkouts = completedWorkouts.map((val, indx) => {
      if (indx === selectedWorkout.index) {
        return true;
      }
      return val;
    });
    setCompletedWorkouts(updatedCompletedWorkouts);
    // update currentWorkoutSets
    setCurrentWorkoutSets(0);
    // reuse logic
    returnToThirdStep();
  };

  const startSet = () => {
    // update currentWorkoutSets
    setCurrentWorkoutSets(currentWorkoutSets + 1);
    // move user to next step - PerformWorkout
    next();
  };

  // use this to disable the 'DONE' button once we reach our goal
  const canExit = () => {
    if (isCardio) {
      return true;
    }
    if (currentWorkoutSets >= selectedWorkout.goal.sets) {
      return true;
    }
    return false;
  };

  // use this to disable the 'Start Set' button once we reach our goal
  const disableStartSetButton = () => {
    if (isCardio) {
      return false;
    } else if (currentWorkoutSets >= selectedWorkout.goal.sets) {
      return true;
    }
    return false;
  };

  return (
    <div className="d-block pt-5">
      {currentWorkoutSets == 0 && (
        <BackArrow onClick={() => returnToThirdStep()} />
      )}
      <div className="d-flex flex-column align-items-center">
        <h2 className="fw-bold pb-2 pt-3 col-12">
          {isCardio
            ? selectedWorkout.name
            : selectedWorkout.completeWorkoutName}
        </h2>
        {selectedWorkout?.notes && (
          <CgNotes
            onClick={() => toggleNotes()}
            className="col-1 back-hover ms-3 NotesIcon"
            color="#EB286A"
          />
        )}
      </div>
      <Modal
        className="px-5 ToastTextColor"
        show={showNotes}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter black"
        centered
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title>Workout Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body className="linebreak">
          <p>{selectedWorkout.notes}</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <CustButton onClick={() => toggleNotes()} text="Close" />
        </Modal.Footer>
      </Modal>
      <GoalDisplay
        goal={isCardio ? selectedWorkout : selectedWorkout.goal}
        isCardio={isCardio}
      />
      <div className="pt-5">
        {!isCardio && (
          <>
            <h4>Completed Sets:</h4>
            <h2 className="yellow">{currentWorkoutSets}</h2>
          </>
        )}
        <CustButton
          text={`Start ${isCardio ? "Cardio" : "Set"}`}
          color="yellow"
          className="btn-lg mt-3 w-50"
          onClick={() => startSet()}
          disabled={disableStartSetButton()}
        />
      </div>
      <div className="mt-5">
        <CustButton
          text="DONE"
          onClick={() => completeWorkout()}
          color="yellow"
          className="mt-5 btn-lg w-75 py-2"
          disabled={!canExit()}
        />
      </div>
    </div>
  );
};

Rest.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  selectedWorkout: PropTypes.object,
  setSelectedWorkout: PropTypes.func,
  completedWorkouts: PropTypes.array,
  setCompletedWorkouts: PropTypes.func,
  currentWorkoutSets: PropTypes.number,
  setCurrentWorkoutSets: PropTypes.func,
  isCardio: PropTypes.bool,
  setIsCardio: PropTypes.func,
};
