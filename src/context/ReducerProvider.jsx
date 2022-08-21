import { useContext, useEffect, useReducer } from "react";
import { tasksReducer } from "../useReducer/tasksReducer";
import { ReducerContext } from "./ReducerContext";
import { TasksContext } from "./TasksContext";

export const ReducerProvider = ({ children }) => {
  const { tasksLocal, setTasksLocal } = useContext(TasksContext);
  const [tasks, dispatch] = useReducer(tasksReducer, tasksLocal);

  useEffect(() => {
    setTasksLocal(tasks);
  }, [tasks]);

  return (
    <>
      <ReducerContext.Provider value={{ tasks, dispatch }}>
        {children}
      </ReducerContext.Provider>
    </>
  );
};
