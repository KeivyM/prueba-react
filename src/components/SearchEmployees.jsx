import React, { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import "./SearchEmployees.css";

export const SearchEmployees = ({ setEmployeeSelected }) => {
  const { employees } = useContext(EmployeesContext);
  const newArray = employees.map((e) => e.name).sort();

  // console.log(newArray)

  const employeesABC = () => {
    // console.log(employees);
  };

  const onSearchEmployee = () => {};

  return (
    <div className="container-searchEmployees">
      <h3>Select the employee:</h3>
      <input type="text" placeholder="Employees" />
      <div>
        <ol>
          {newArray.map((employee) => (
            <li onClick={()=>setEmployeeSelected(employee)}>{employee}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
