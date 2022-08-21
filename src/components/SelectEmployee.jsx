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

  return (
    <>
      <div className="container-selectEmployee">
        <ListMaterialUI
          columns={columns}
          data={employees}
          optionalFuncion={setEmployeeSelected}
        />
      </div>
    </>
  );
};
