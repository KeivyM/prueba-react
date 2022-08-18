import { useContext, useEffect, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";
import { TYPES } from "../useReducer/tasksActions";
import "./Task.css";

export const Task = ({ element }) => {
  console.log("prueba 2");
  const { dispatch } = useContext(TasksContext);

  const { formState, onInputChange } = useForm(element);
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   setTasksLocal(tasks);
  // }, [tasks]);

  const onEditTask = (task) => {
    const action = {
      type: TYPES.editTask,
      payload: task,
    };
    dispatch(action);
    // setTasksLocal(tasks);
  };

  // const onDeleteTask = () => {
  //   const action = {
  //     type: TYPES.removeTask,
  //     payload: element.id,
  //   };
  //   dispatch(action);
  // };

  const onDeleteTask = (task) => {
    const action = {
      type: TYPES.removeTask,
      payload: task,
    };
    dispatch(action);
    // console.log(tasks);
    // console.log(tasksLocal);
  };

  const onToggleTask = (task) => {
    const action = {
      type: TYPES.toggleTask,
      payload: task,
    };
    dispatch(action);
  };

  const DeleteTask = () => {
    onDeleteTask(element.id);
    // setTasksLocal(tasks);

    // console.log(tasksLocal);
  };

  const EditTask = (e) => {
    e.preventDefault();
    onEditTask(formState);
    setModal(!modal);
  };

  const ToggleTask = () => {
    onToggleTask(element.id);
    // setTasksLocal(tasks);
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
