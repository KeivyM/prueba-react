import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { EmployeesContext } from "./EmployeesContext";

const initialEmployees = [
  {
    name: "Julio",
    years: 24,
    phoneNumber: 555555,
    label: "Julio",
  },
  {
    name: "Daniel",
    years: 20,
    phoneNumber: 555555,
    label: "Daniel",
  },
];

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useLocalStorage("employees", []);

  // console.log(employees);

  return (
    <>
      <EmployeesContext.Provider value={{ employees, setEmployees }}>
        {children}
      </EmployeesContext.Provider>
    </>
  );
};
