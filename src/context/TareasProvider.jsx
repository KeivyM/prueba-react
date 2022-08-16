import { useState } from "react";
import { TareasContext } from "./TareasContext";

export const TareasProvider = ({ children }) => {
  const tareasIniciales = [
    {
      id: 1,
      tarea: "lavar",
      asignada: "raul",
      done: false,
    },
    {
      id: 2,
      tarea: "compras",
      asignada: "marta",
      done: true,
    },
  ];

  const [tareas, setTareas] = useState(tareasIniciales);

  console.log(tareas);
  return (
    <TareasContext.Provider value={{ tareas, setTareas }}>
      {children}
    </TareasContext.Provider>
  );
};
