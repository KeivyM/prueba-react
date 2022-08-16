import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Task } from "../components/Task";
import { TasksContext } from "../context/TasksContext";

const tare = true;

export const ListTasks = () => {
  const { tasks } = useContext(TasksContext);
  console.log(tasks);



  return (
    <div>
      {tare ? (
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
      ) : (
        <h3>
          Aún no hay tareas presiona <NavLink to="/agregarTarea">aqui</NavLink>{" "}
          para agregar
        </h3>
      )}
    </div>
  );
};
