import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { LinkAddTask } from "../components/LinkAddTask";
import { Task } from "../components/Task";
import "./ListTasks.css";

export const ListTasks = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      {tasks.length >= 1 ? (
        <div className="container-list">
            <div className="container-titles">
              <h4>Done</h4>
              <h4>Task</h4>
              <h4>Assigned</h4>
            </div>
          {tasks.map((element) => (
            <Task key={element.id} element={element} />
          ))}
        </div>
      ) : (
        <LinkAddTask />
      )}
    </>
  );
};
