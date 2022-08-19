import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { LinkAddTask } from "../components/LinkAddTask";
import { Task } from "../components/Task";
import "./ListTasks.css";

export const ListTasks = () => {
  const { tasksLocal } = useContext(TasksContext);

  return (
    <>
      {tasksLocal.length >= 1 ? (
        <div className="container-list">
          <div className="container-titles">
            <h4>Done</h4>
            <h5>|</h5>
            <h4>Task</h4>
            <h5>|</h5>
            <h4>Assigned</h4>
          </div>
          {tasksLocal.map((element) => (
            <Task key={element.id} element={element} />
          ))}
        </div>
      ) : (
        <LinkAddTask />
      )}
    </>
  );
};
