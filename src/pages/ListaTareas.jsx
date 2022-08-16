import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Tarea } from "../components/Tarea";
import { TareasContext } from "../context/TareasContext";

const tare = true;
export const ListaTareas = () => {
  const { tareas } = useContext(TareasContext);
  console.log(tareas);

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
          {tareas.map((element) => (
            <Tarea key={element.id} element={element} />
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
