import React, { useContext, useEffect, useState } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { ComboBox } from "./Prueba";
import "./SearchEmployees.css";

export const SearchEmployees = ({ setEmployeeSelected }) => {
  const { employees } = useContext(EmployeesContext);
  const orderedEmployees = employees.map((e) => e.name).sort();
  // const [valueInput, setValueInput] = useState({value:'',valueCoincide: '' ,exist:false});

  // const onSearchEmployee = (event) => {
  //   const match = orderedEmployees.find((element) =>
  //     element.includes(valueInput.value)
  //   );
  //   console.log(match);
  //   console.log(orderedEmployees);
  //   setValueInput({ value: event.target.value,valueCoincide: match , exist: true });
  // };

  return (
    <div className="container-searchEmployees">
      <h3>Select the employee:</h3>
      {/* <input
        type="text"
        placeholder="Employees"
        value={valueInput.value}
        onChange={onSearchEmployee}
      /> */}
      <div>
        <ol>
          {/* {valueInput.exist ? (
            <li onClick={() => setEmployeeSelected(valueInput.valueCoincide)}>
              {valueInput.valueCoincide}
            </li>
          ) : ( */}
          {
            orderedEmployees.map((employee) => (
              <li key={employee} onClick={() => setEmployeeSelected(employee)}>
                {employee}
              </li>
            ))
          // )
          }
          {/* <ComboBox /> */}
        </ol>
      </div>
    </div>
  );
};
