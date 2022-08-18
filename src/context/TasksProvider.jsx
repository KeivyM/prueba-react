import { useEffect, useReducer, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { tasksReducer } from "../useReducer/tasksReducer";
import { TasksContext } from "./TasksContext";
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

export const TasksProvider = ({ children }) => {
  const [tasksLocal, setTasksLocal] = useLocalStorage("tasks");

  const [tasks, dispatch] = useReducer(tasksReducer, tasksLocal);


  
  useEffect(() => {
    setTasksLocal(tasks);
  }, [tasks]);

  console.log(tasksLocal);
  console.log(tasks);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksLocal,
        dispatch,
        setTasksLocal,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
