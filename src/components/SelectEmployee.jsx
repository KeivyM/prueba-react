import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { ComboBox } from "./Prueba";
import "./SelectEmployee.css";

export const SelectEmployee = ({ setEmployeeSelected }) => {
  const { employees } = useContext(EmployeesContext);
  const orderedEmployees = employees.map((e) => e.name).sort();

  return (
    <div className="container-selectEmployee">
      <h3>Select the employee:</h3>
      {/* <div> */}
        <ol className="ol-container-selectEmployee">
          {orderedEmployees.map((employee) => (
            <li key={employee} onClick={() => setEmployeeSelected(employee)}>
              {employee}
            </li>
          ))}
          {/* <ComboBox /> */}
        </ol>
      {/* </div> */}
    </div>
  );
};
