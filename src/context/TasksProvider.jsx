import { useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TYPES } from "../useReducer/tasksActions";
import { tasksReducer } from "../useReducer/tasksReducer";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const initialTasks = [
    {
      id: 1,
      task: "lavar",
      assigned: "raul",
      done: false,
    },
    {
      id: 2,
      task: "compras",
      assigned: "marta",
      done: true,
    },
  ];

  const [tasksLocal, setTasksLocal] = useLocalStorage("tasks", []);


  // const [tasks, dispatch] = useReducer(tasksReducer, tasksLocal);

  // console.log(tasks);
  // console.log(tasksLocal);

  // useEffect(() => {
  //   setTasksLocal(tasks);
  // }, [tasks]);

  // const onAddTask = (task) => {
  //   const action = {
  //     type: TYPES.addTask,
  //     payload: task,
  //   };
  //   dispatch(action);
  // };

  // const onEditTask = (task) => {
  //   console.log(tasks);
  //   const action = {
  //     type: "EDIT TASK",
  //     payload: task,
  //   };
  //   dispatch(action);
  // };

  // const onDeleteTask = (task) => {
  //   const action = {
  //     type: "REMOVE TASK",
  //     payload: task,
  //   };
  //   dispatch(action);
  // };

  // const onToggleTask = (task) => {
  //   const action = {
  //     type: "TOGGLE TASK",
  //     payload: task,
  //   };
  //   dispatch(action);
  // };

  return (
    <TasksContext.Provider
      value={{
        // tasks,
        tasksLocal,
        // onDeleteTask,
        // onToggleTask,
        // onEditTask,
        setTasksLocal,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
