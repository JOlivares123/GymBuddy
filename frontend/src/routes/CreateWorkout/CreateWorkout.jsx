import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MultiSelect } from "react-multi-select-component";

import { BackArrow, CustButton } from "../../components";
import MUSCLE_DATA from "./MuscleGroups.json";
import "./CreateWorkout.scss";
import { isMobile } from "../../utils/WindowSize";

export const CreateWorkout = () => {
  const navigate = useNavigate();

  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  // TODO: continue to look into how to have an event emitted from
  // MultiSelect to grab the value we need so I can easily add it to
  // newWorkout
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  // state to hold new workout data from form
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    weight: 0,
    minReps: 0,
    maxReps: 0,
    notes: "",
    muscles: [],
  });
  // probably need to modify one state for workouts and make the below state an object
  const [isNewWorkoutCardio, setIsNewWorkoutCardio] = useState(false);
  const [newDayWorkouts, setNewDayWorkouts] = useState([]);

  const toggleWorkoutFormModal = () => {
    setShowWorkoutForm(!showWorkoutForm);
  };

  const goBackToSelectProgram = () => {
    navigate("/workout");
  };

  const onAddWorkout = () => {
    // check that form is valid (minReps < maxReps + nonEmpty)
    if (
      newWorkout["name"].length === 0 ||
      newWorkout["weight"] === 0 ||
      newWorkout["minReps"] === 0 ||
      newWorkout["maxReps"] === 0 ||
      selectedMuscles.length === 0
    ) {
      alert("Please fill in entire form");
    } else if (newWorkout["minReps"] > newWorkout["maxReps"]) {
      alert("Please select valid rep range");
    } else {
      // create new array from selectedMuscles
      const cleanedSelectedMuscles = selectedMuscles.map(
        (muscle) => muscle.value
      );
      // add selectedMuscles to newWorkout
      // add newWorkout to newDayWorkouts
      setNewDayWorkouts([
        ...newDayWorkouts,
        { ...newWorkout, muscles: cleanedSelectedMuscles },
      ]);
      // clear selectedMuscles
      setSelectedMuscles([]);
      // clear newWorkout
      setNewWorkout({
        name: "",
        weight: 0,
        minReps: 0,
        maxReps: 0,
        notes: "",
        muscles: [],
      });
      // close modal
      setShowWorkoutForm(!showWorkoutForm);
    }
  };

  /*
    I can instead have the list of workouts shown under Day Name input with
    Bootstrap ListGroup and have a button that says (add new workout to day).
    Then the onClick of it opens a Modal with the form then the onSubmit adds
    this new workout to the ListGroup state
  */

  return (
    <div className="d-block pt-5">
      <BackArrow onClick={() => goBackToSelectProgram()} />
      <h2 className="fw-bold mb-4">Create New Program</h2>
      <div className="col-8 mx-auto maxWidth text-start mb-3">
        <label htmlFor="programName" className="form-label fw-bold">
          Program Name
        </label>
        <input
          className="form-control TransparentInput white"
          id="programName"
          required
          aria-describedby="programNameHelp"
        />
      </div>
      <div className="mx-auto formContainer my-5 py-5">
        <h2 className="mb-3">Create Program Day</h2>
        <div className="col-8 mx-auto maxWidth text-start mb-3">
          <label htmlFor="dayName" className="form-label fw-bold">
            Day Name
          </label>
          <input
            className="form-control TransparentInput white"
            id="dayName"
            required
            aria-describedby="dayNameHelp"
          />
        </div>
        <h3 className="mt-5 mb-3">Workouts Added</h3>
        {/* TODO: add maxHeight here and make it scrollable */}
        <ListGroup className="w-75 mx-auto mb-5 maxWidth">
          {newDayWorkouts.length === 0 ? (
            <h5 className="grey">No Workouts Added Yet</h5>
          ) : (
            newDayWorkouts.map((workout) => {
              return (
                <ListGroup.Item
                  as="li"
                  key={workout.name}
                  className="d-flex align-items-start justify-content-between"
                >
                  <div className="ms-2 d-flex flex-column">
                    <div className="fw-bold d-flex">{workout.name}</div>
                    <div className="d-flex">
                      Reps: {workout.minReps} - {workout.maxReps}
                    </div>
                    <div className="d-flex">Weight: {workout.weight} lbs</div>
                  </div>
                  <FiEdit className="back-hover" size={20} />
                </ListGroup.Item>
              );
            })
          )}
        </ListGroup>

        <div
          className={
            "w-50 mx-auto justify-content-center maxWidth d-flex " +
            (isMobile() ? "flex-column" : "flex-row")
          }
        >
          <CustButton
            className={isMobile() ? "mb-3" : "me-2"}
            onClick={() => toggleWorkoutFormModal()}
            text="Add Workout to Day"
          />
          <CustButton text="Finalize Day" />
        </div>
      </div>
      <Modal
        className="px-4 ToastTextColor"
        show={showWorkoutForm}
        size={isMobile() ? "sm" : "md"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title>Add Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="col-10 mx-auto maxWidth mb-3 d-flex justify-content-center">
            <Form.Check
              checked
              inline
              onClick={() => setIsNewWorkoutCardio(false)}
              label="Weights"
              name="type"
              id="weights"
              type="radio"
            />
            <Form.Check
              inline
              onClick={() => setIsNewWorkoutCardio(true)}
              label="Cardio"
              id="cardio"
              name="type"
              type="radio"
            />
          </Form>
          <div className="col-10 mx-auto maxWidth text-start mb-3">
            <label htmlFor="dayName" className="form-label">
              Workout Name
            </label>
            <input
              className="form-control TransparentInput black"
              id="workoutName"
              required
              value={newWorkout["name"]}
              onChange={(e) =>
                setNewWorkout({ ...newWorkout, name: e.target.value })
              }
              aria-describedby="workoutNameHelp"
            />
          </div>

          {isNewWorkoutCardio ? (
            <div className="col-10 mx-auto maxWidth text-start mb-3">
              <label htmlFor="duration" className="form-label">
                Cardio Duration (mins)
              </label>
              <input
                className="form-control TransparentInput black"
                id="duration"
                required
                type="number"
                step={0.01}
                pattern="[0-9]*"
                inputMode="numeric"
                onChange={(e) => console.log(Number(e.target.value))}
                aria-describedby="weightHelp"
              />
            </div>
          ) : (
            <>
              <div className="col-10 mx-auto maxWidth text-start mb-3">
                <label htmlFor="weight" className="form-label">
                  Weight (lbs)
                </label>
                <input
                  className="form-control TransparentInput black"
                  id="weight"
                  required
                  type="number"
                  step={0.01}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onChange={(e) =>
                    setNewWorkout({
                      ...newWorkout,
                      weight: Number(e.target.value),
                    })
                  }
                  aria-describedby="weightHelp"
                />
              </div>
              <div className="col-10 mx-auto text-start maxWidth mb-3">
                <label htmlFor="minReps" className="form-label">
                  Minimum Reps
                </label>
                <input
                  className="form-control TransparentInput black"
                  id="minReps"
                  required
                  type="number"
                  step={0.01}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onChange={(e) =>
                    setNewWorkout({
                      ...newWorkout,
                      minReps: Number(e.target.value),
                    })
                  }
                  aria-describedby="minRepsHelp"
                />
              </div>
              <div className="col-10 mx-auto maxWidth text-start mb-3">
                <label htmlFor="maxReps" className="form-label">
                  Maximum Reps
                </label>
                <input
                  className="form-control TransparentInput black"
                  id="maxReps"
                  required
                  type="number"
                  step={0.01}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onChange={(e) =>
                    setNewWorkout({
                      ...newWorkout,
                      maxReps: Number(e.target.value),
                    })
                  }
                  aria-describedby="maxRepsHelp"
                />
              </div>
            </>
          )}
          <div className="col-10 mx-auto maxWidth text-start mb-3">
            <label htmlFor="notes" className="form-label">
              Notes
            </label>
            <input
              className="form-control TransparentInput black"
              id="notes"
              value={newWorkout["notes"]}
              onChange={(e) =>
                setNewWorkout({ ...newWorkout, notes: e.target.value })
              }
              aria-describedby="notesHelp"
            />
          </div>
          <div className="text-start col-10 mx-auto mb-1 maxWidth">
            <label htmlFor="MultiSelect" className="form-label">
              Muscles Worked
            </label>
            <MultiSelect
              hasSelectAll={false}
              value={selectedMuscles}
              onChange={setSelectedMuscles}
              options={MUSCLE_DATA}
              labelledBy="Muscles"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <CustButton
            className="px-3"
            text="Add"
            onClick={() => onAddWorkout()}
          />
          <CustButton onClick={() => toggleWorkoutFormModal()} text="Cancel" />
        </Modal.Footer>
      </Modal>
      {/* button to create a new day */}
      {/* button to finish make post request and send user back */}
      {/* form that asks user input for workout needed */}
      {/* caurosel holding newly created Tiles (dayInfo) */}
    </div>
  );
};
