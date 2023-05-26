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

const SECS = 60;
export const CreateWorkout = () => {
  const navigate = useNavigate();

  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  // TODO: continue to look into how to have an event emitted from
  // MultiSelect to grab the value we need so I can easily add it to
  // newWorkout
  const [selectedMuscles, setSelectedMuscles] = useState([]);

  // const [newProgram, setNewProgram] = useState({ name: "", days: [] });
  const [newDay, setNewDay] = useState({
    restDuration: 0,
    cardio: [],
    workoutsNeeded: [],
  });
  // state to hold new workout data from form
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    weight: 0,
    minReps: 0,
    maxReps: 0,
    sets: 0,
    notes: "",
    musclesWorked: [],
  });
  const [isNewWorkoutCardio, setIsNewWorkoutCardio] = useState(false);

  const toggleWorkoutFormModal = () => {
    setShowWorkoutForm(!showWorkoutForm);
  };

  const goBackToSelectProgram = () => {
    navigate("/workout");
  };

  const onAddCardio = () => {
    console.log("add cardio");
  };
  const onAddWorkout = () => {
    // check that form is valid (minReps < maxReps + nonEmpty)
    if (
      newWorkout["name"].length === 0 ||
      newWorkout["weight"] === 0 ||
      newWorkout["minReps"] === 0 ||
      newWorkout["maxReps"] === 0 ||
      newWorkout["sets"] === 0 ||
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
      // add newWorkout to newDay
      setNewDay({
        ...newDay,
        workoutsNeeded: [
          ...newDay.workoutsNeeded,
          { ...newWorkout, musclesWorked: cleanedSelectedMuscles },
        ],
      });
      // clear selectedMuscles
      setSelectedMuscles([]);
      // clear newWorkout
      setNewWorkout({
        name: "",
        weight: 0,
        minReps: 0,
        maxReps: 0,
        sets: 0,
        notes: "",
        musclesWorked: [],
      });
      // close modal
      setShowWorkoutForm(!showWorkoutForm);
    }
  };

  const handleOnAdd = () => {
    if (!isNewWorkoutCardio) {
      onAddWorkout();
    } else {
      onAddCardio();
    }
  };
  console.log(newWorkout, newDay);
  return (
    <div className="d-block py-5">
      <BackArrow onClick={() => goBackToSelectProgram()} />

      <div className="mx-auto text-start programHeader py-5">
        <h2 className="fw-bold mb-4 text-center">Create New Program</h2>
        <div className="col-8 mx-auto maxWidth text-start">
          <label htmlFor="programName" className="form-label">
            Program Name
          </label>
          <input
            className="form-control TransparentInput white"
            id="programName"
            required
            aria-describedby="programNameHelp"
          />
        </div>
      </div>
      <div className="mx-auto dayContainer my-3 py-5">
        <h2 className="mb-3">Create Program Day</h2>
        <div className="col-8 mx-auto maxWidth text-start mb-3">
          <label htmlFor="restDuration" className="form-label">
            Resting Period (Mins)
          </label>
          <input
            className="form-control TransparentInput white"
            id="restDuration"
            required
            type="number"
            step={0.01}
            pattern="[0-9]*"
            inputMode="numeric"
            onChange={(e) =>
              setNewDay({
                ...newDay,
                restDuration: Number(e.target.value) * SECS,
              })
            }
            aria-describedby="restDurationHelp"
          />
        </div>
        <h3 className="mt-5 mb-3">Workouts Added</h3>
        {/* TODO: add maxHeight here and make it scrollable */}
        <ListGroup className="w-75 mx-auto mb-5 maxWidth workoutsAddedContainer">
          {[...newDay.cardio, ...newDay.workoutsNeeded].length === 0 ? (
            <h5 className="grey">No Workouts Added Yet</h5>
          ) : (
            [...newDay.cardio, ...newDay.workoutsNeeded].map((workout) => {
              return (
                <ListGroup.Item
                  as="li"
                  key={workout.name}
                  className="d-flex align-items-start"
                >
                  <div className="ms-1 d-flex w-100">
                    <div className="col-6">
                      <div className="fw-bold d-flex justify-content-center">
                        {workout.name}
                      </div>
                      <FiEdit className="back-hover mt-2" size={18} />
                    </div>
                    <div className="col-6">
                      {workout?.sets ? (
                        <>
                          <div className="d-flex">
                            <span className="pink"> Sets </span>:
                            {" " + workout.sets + " "}
                          </div>
                          <div className="d-flex">
                            <span className="pink">Reps</span>:{" "}
                            {workout.minReps} - {workout.maxReps}
                          </div>
                          <div className="d-flex">
                            <span className="pink">Weight</span>:{" "}
                            {workout.weight} lbs
                          </div>
                        </>
                      ) : (
                        <div className="d-flex">
                          <span className="pink">Duration</span>:{" "}
                          {workout.duration} mins
                        </div>
                      )}
                    </div>
                  </div>
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
          <Modal.Title>New Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="col-10 mx-auto maxWidth mb-2 d-flex justify-content-center">
            <Form.Check
              checked={!isNewWorkoutCardio}
              inline
              onClick={() => setIsNewWorkoutCardio(false)}
              label="Weights"
              name="type"
              id="weights"
              type="radio"
              readOnly
            />
            <Form.Check
              inline
              checked={isNewWorkoutCardio}
              onClick={() => setIsNewWorkoutCardio(true)}
              label="Cardio"
              id="cardio"
              name="type"
              type="radio"
              readOnly
            />
          </Form>
          <div className="col-10 mx-auto maxWidth text-start mb-2">
            <label htmlFor="workoutName" className="form-label">
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
            <div className="col-10 mx-auto maxWidth text-start mb-2">
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
              <div className="col-10 mx-auto maxWidth text-start mb-2">
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
              <div className="col-10 mx-auto text-start maxWidth mb-2">
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
              <div className="col-10 mx-auto maxWidth text-start mb-2">
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
              <div className="col-10 mx-auto maxWidth text-start mb-2">
                <label htmlFor="numSets" className="form-label">
                  Number of Sets
                </label>
                <input
                  className="form-control TransparentInput black"
                  id="numSets"
                  required
                  type="number"
                  step={0.01}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onChange={(e) =>
                    setNewWorkout({
                      ...newWorkout,
                      sets: Number(e.target.value),
                    })
                  }
                  aria-describedby="numSetsHelp"
                />
              </div>
            </>
          )}
          <div className="col-10 mx-auto maxWidth text-start mb-2">
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
            onClick={() => handleOnAdd()}
          />
          <CustButton onClick={() => toggleWorkoutFormModal()} text="Cancel" />
        </Modal.Footer>
      </Modal>
      {/* caurosel holding newly created Tiles (dayInfo) */}
      {/* button to finish make post request and send user back */}
    </div>
  );
};
