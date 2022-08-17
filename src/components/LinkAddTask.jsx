import { NavLink } from "react-router-dom";
import './LinkAddTask.css'

export const LinkAddTask = () => {
  return (
    <h3 className="message-withoutTasks">
      Aún no hay tareas presiona <NavLink className='link-message' to="/agregarTarea">aqui</NavLink> para
      agregar
    </h3>
  );
};
