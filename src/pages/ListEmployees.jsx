import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import './ListEmployees.css';

export const ListEmployees = () => {
  const { employees } = useContext(EmployeesContext);

  return (
    <ul className="ul-listEmployees">
      {employees.map((employee) => (
        <li className="li-listEmployees" key={employee.name}>
          {employee.name}
        </li>
      ))}
    </ul>
  );
};
