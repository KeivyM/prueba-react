import { useLocalStorage } from "../hooks/useLocalStorage";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {

  const [tasksLocal, setTasksLocal] = useLocalStorage("tasks-list");

  return (
    <TasksContext.Provider value={{ tasksLocal, setTasksLocal }}>
      {children}
    </TasksContext.Provider>
  );
};
