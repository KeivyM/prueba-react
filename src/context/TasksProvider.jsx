import { useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TYPES } from "../useReducer/tasksActions";
import { tasksReducer } from "../useReducer/tasksReducer";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  // const initialTasks = [
  //   {
  //     id: 1,
  //     task: "lavar",
  //     assigned: "raul",
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     task: "compras",
  //     assigned: "marta",
  //     done: true,
  //   },
  // ];

  const [tasksLocal, setTasksLocal] = useLocalStorage("tasks-list");
  // console.log(tasksLocal);

  return (
    <TasksContext.Provider value={{ tasksLocal, setTasksLocal }}>
      {children}
    </TasksContext.Provider>
  );
};
