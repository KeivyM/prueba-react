import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LinkAddTask } from "../components/LinkAddTask";
import { Task } from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import "./ListTasks.css";

export const ListTasks = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="container-ListTasks">
      {tasks.length < 1 ? (
        <LinkAddTask />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Done</th>
              <th>Task</th>
              <th>Asignada</th>
            </tr>
          </thead>
          {tasks.map((element) => (
            <Task key={element.id} element={element} />
          ))}
        </table>
      )}
    </div>
  );
};
