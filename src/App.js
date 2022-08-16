// import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { EmployeesProvider } from "./context/EmployeesProvider";
import { TareasProvider } from "./context/TareasProvider";
import { AgregarEmpleado } from "./pages/AgregarEmpleado";
import { AgregarTarea } from "./pages/AgregarTarea";
import { ListaEmpleados } from "./pages/ListaEmpleados";
import { ListaTareas } from "./pages/ListaTareas";

function App() {
  return (
    <EmployeesProvider>
      <TareasProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/empleados" element={<ListaEmpleados />} />
          <Route path="/agregarTarea" element={<AgregarTarea />} />
          <Route path="/agregarEmpleado" element={<AgregarEmpleado />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </TareasProvider>
    </EmployeesProvider>
  );
}

export default App;
