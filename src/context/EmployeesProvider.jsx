import { useState } from "react";
import { EmployeesContext } from "./EmployeesContext";

const initialEmployees = [
  {
    name: "Julio",
    years: 24,
    phoneNumber: 555555,
    label:'Julio'
  },
  {
    name: "Daniel",
    years: 20,
    phoneNumber: 555555,
    label:'Daniel'
  },
];

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(initialEmployees);

  return (
    <>
      <EmployeesContext.Provider value={{ employees, setEmployees }}>
        {children}
      </EmployeesContext.Provider>
    </>
  );
};
