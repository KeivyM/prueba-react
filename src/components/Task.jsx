import { useContext, useEffect, useReducer, useState } from "react";
import { Button, Checkbox } from "@mui/material";
// import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";
import "./Task.css";
// import { tasksReducer } from "../useReducer/tasksReducer";
import { ReducerContext } from "../context/ReducerContext";

export const Task = ({ element }) => {
  // const { setTasksLocal } = useContext(TasksContext);
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
      <h4>
        <Checkbox checked={element.done} onChange={ToggleTask} />
      </h4>
      {modal ? (
        <>
          <h4>
            <form onSubmit={EditTask}>
              <input
                type="text"
                placeholder="Task"
                name="task"
                value={formState.task}
                onChange={onInputChange}
                required
              />
            </form>
          </h4>
          <h4>{element.assigned}</h4>
          <h4>
            <Button variant="contained" onClick={EditTask}>
              Save
            </Button>
          </h4>
        </>
      ) : (
        <>
          <h4 className={`element-task ${element.done ? "through" : " "}`}>
            {element.task}
          </h4>
          <h4 className={`element-task ${element.done ? "through" : " "}`}>
            {element.assigned}
          </h4>
          <h4>
            <Button variant="contained" onClick={() => setModal(!modal)}>
              Edit
            </Button>
          </h4>
        </>
      )}

      <h4>
        <Button variant="contained" onClick={DeleteTask}>
          Delete
        </Button>
      </h4>
    </div>
  );
};
