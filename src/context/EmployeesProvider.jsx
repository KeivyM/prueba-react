import { useLocalStorage } from "../hooks/useLocalStorage";
import { EmployeesContext } from "./EmployeesContext";

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useLocalStorage("employees");

  return (
    <>
      <EmployeesContext.Provider value={{ employees, setEmployees }}>
        {children}
      </EmployeesContext.Provider>
    </>
  );
};
