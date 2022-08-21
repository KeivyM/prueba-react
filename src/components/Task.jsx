import { useContext, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { ReducerContext } from "../context/ReducerContext";
import { useForm } from "../hooks/useForm";
import "./Task.css";

export const Task = ({ element }) => {
  const { dispatch } = useContext(ReducerContext);
  const { formState, onInputChange } = useForm(element);
  const [modal, setModal] = useState(false);

  const onEditTask = (task) => {
    const action = {
      type: "EDIT TASK",
      payload: task,
    };
    dispatch(action);
  };

  const onDeleteTask = (task) => {
    const action = {
      type: "REMOVE TASK",
      payload: task,
    };
    dispatch(action);
  };

  const onToggleTask = (task) => {
    const action = {
      type: "TOGGLE TASK",
      payload: task,
    };
    dispatch(action);
  };

  const DeleteTask = () => {
    onDeleteTask(element.id);
  };

  const EditTask = (e) => {
    e.preventDefault();
    onEditTask(formState);
    setModal(!modal);
  };

  const ToggleTask = () => {
    onToggleTask(element.id);
  };

  return (
    <div className="container-task">
      {modal ? (
        <>
          <form onSubmit={EditTask}>
            <input
              className="input-edit-task"
              type="text"
              placeholder="Task"
              name="task"
              value={formState.task}
              onChange={onInputChange}
              required
            />
          </form>
          <h4>{element.assigned}</h4>
          <Button variant="contained" size="small" onClick={EditTask}>
            Save
          </Button>
        </>
      ) : (
        <>
          <Checkbox checked={element.done} onChange={ToggleTask} />
          <h4 className={`element-task ${element.done ? "through" : " "}`}>
            {element.task}
          </h4>
          <h4 className={`element-task ${element.done ? "through" : " "}`}>
            {element.assigned}
          </h4>
          <Button
            variant="contained"
            size="small"
            onClick={() => setModal(!modal)}
          >
            Edit
          </Button>
        </>
      )}

      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={DeleteTask}
      >
        Delete
      </Button>
    </div>
  );
};
