import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

export const ListEmployees = () => {
  const { employees } = useContext(EmployeesContext);

  return (
    <>
      {employees.map((employee) => (
        <li key={employee.name}>{employee.name}</li>
      ))}
    </>
  );
};
