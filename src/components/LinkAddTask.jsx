import { NavLink } from "react-router-dom";
import "./LinkAddTask.css";

export const LinkAddTask = () => {
  return (
    <h3 className="message-withoutTasks">
      No tasks.
      <br />
      You must have employees to assign them tasks.
      <br />
      <NavLink className="link-message" to="/agregarEmpleado">
        Add Employee
      </NavLink>{" "}
      <br />
      <NavLink className="link-message" to="/agregarTarea">
        Add Task
      </NavLink>
    </h3>
  );
};
