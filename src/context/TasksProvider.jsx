import { useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
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
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // const [tasks, setEmployees] = useLocalStorage("tasks", []);
console.log(tasks)

  const onAddTask = (task) => {
    const action = {
      type: "ADD TASK",
      payload: task,
    };
    dispatch(action);
  };

  const onEditTask = (task) => {
      // console.log('editando')
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

  return (
    <TasksContext.Provider
      value={{
        tasks,
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
