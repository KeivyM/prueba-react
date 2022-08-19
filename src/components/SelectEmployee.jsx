import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { ListMaterialUI } from "./ListMaterialUI";
import "./SelectEmployee.css";

const columns = [
  {
    id: "name",
    label: "Select the employee",
    minWidth: 170,
    align: "center",
  },
];

export const SelectEmployee = ({ setEmployeeSelected }) => {
  const { employees } = useContext(EmployeesContext);
  const orderedEmployees = employees.map((e) => e.name).sort();
  
  return (
      <>
      {/* <h3>Select the employee:</h3> */}
    <div className="container-selectEmployee">
      {/* <ol className="ol-container-selectEmployee">
          {orderedEmployees.map((employee) => (
            <li key={employee} onClick={() => setEmployeeSelected(employee)}>
              {employee}
            </li>
          ))}
        </ol> */}
      {/* <div className="ol-container-selectEmployee"> */}
      <ListMaterialUI
        columns={columns}
        data={employees}
        optionalFuncion={setEmployeeSelected}
      />
      {/* </div> */}
    </div>
    </>
  );
};
