import { useReducer, useState } from "react";
import { tasksReducer } from "../useReducer/tasksReducer";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const tareasIniciales = [
    {
      id: 1,
      task: "lavar",
      asignada: "raul",
      done: false,
    },
    {
      id: 2,
      task: "compras",
      asignada: "marta",
      done: true,
    },
  ];
  const [tasks, dispatch] = useReducer(tasksReducer, tareasIniciales);

  const onAddTask = (task) => {
    const action = {
      type: "ADD TASK",
      payload: task,
    };
    dispatch(action);
  };

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

  const [task, setTasks] = useState(tareasIniciales);

  console.log(tasks); //es un array
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        onAddTask,
        onDeleteTask,
        onToggleTask,
        onEditTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
