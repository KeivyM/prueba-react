import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { ListMaterialUI } from "../components/ListMaterialUI";
import "./ListEmployees.css";

const columns = [
  { id: "name", label: "Name", minWidth: 100, align:'center'  },
  {
    id: "years",
    label: "Years",
    minWidth: 10,
    align: "center",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    minWidth: 90,
    align: "center",
  },
];

export function ListEmployees() {
  const { employees } = useContext(EmployeesContext);
  return (
    <div className="container-ListEmployees">
      <ListMaterialUI columns={columns} data={employees} />
    </div>
  );
}
