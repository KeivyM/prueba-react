import React, { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { useForm } from "../hooks/useForm";
import "./AddEmployee.css";

const initialValue = {
  name: "",
  years: "",
  phoneNumber: "",
};

export const AddEmployee = () => {
  const { employees, setEmployees } = useContext(EmployeesContext);
  const { onInputChange, onResetForm, formState } = useForm(initialValue);

  const validarEmpleado = (e) => {
    e.preventDefault();

    if (formState.name && formState.years && formState.phoneNumber) {
      setEmployees([...employees, formState]);
      onResetForm();
    }
  };

  return (
    <form className="formAddTask" onSubmit={validarEmpleado}>
      <input
        className="inputAddTask"
        type="text"
        placeholder="Name"
        name="name"
        value={formState.name}
        onChange={onInputChange}
        required
      />
      <input
        className="inputAddTask"
        type="number"
        placeholder="Years"
        name="years"
        value={formState.years}
        onChange={onInputChange}
        required
      />
      <input
        className="inputAddTask"
        type="number"
        placeholder="Phone number"
        name="phoneNumber"
        value={formState.phoneNumber}
        onChange={onInputChange}
        required
      />
      <button className="buttonAddTask" type="submit">
        Add
      </button>
    </form>
  );
};
