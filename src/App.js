import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { EmployeesProvider } from "./context/EmployeesProvider";
import { ReducerProvider } from "./context/ReducerProvider";
import { TasksProvider } from "./context/TasksProvider";
import { AddEmployee } from "./pages/AddEmployee";
import { AddTask } from "./pages/AddTask";
import { ListEmployees } from "./pages/ListEmployees";
import { ListTasks } from "./pages/ListTasks";

function App() {
  return (
    <TasksProvider>
      <EmployeesProvider>
        <ReducerProvider>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ListTasks />} />
            <Route path="/empleados" element={<ListEmployees />} />
            <Route path="/agregarTarea" element={<AddTask />} />
            <Route path="/agregarEmpleado" element={<AddEmployee />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </ReducerProvider>
      </EmployeesProvider>
    </TasksProvider>
  );
}

export default App;
