import React, { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { useForm } from "../hooks/useForm";

const styles = {
  form: {
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    gap: "10px",
  },
  inputs: {
    height: "35px",
    padding: "0 10px",
  },
  button: {
    height: "35px",
    width: "200px",
    margin: "0 auto",
  },
};

const initialValue = {
  name: '',
  years: '',
  phoneNumber: '',
};

export const AddEmployee = () => {
  const { employees, setEmployees } = useContext(EmployeesContext);

  const { onInputChange, onResetForm, formState } = useForm(initialValue);

  // console.log(formState);

  const validarEmpleado = (e) => {
    e.preventDefault();
    if (formState.name && formState.years && formState.phoneNumber) {
      setEmployees([...employees, formState]);
      onResetForm();
    }
  };

  return (
    <form style={styles.form} onSubmit={validarEmpleado}>
      <input
        style={styles.inputs}
        type="text"
        placeholder="Name"
        name="name"
        value={formState.name}
        onChange={onInputChange}
        required
      />
      <input
        style={styles.inputs}
        type="number"
        placeholder="Years"
        name="years"
        value={formState.years}
        onChange={onInputChange}
        required
      />
      <input
        style={styles.inputs}
        type="number"
        placeholder="Phone number"
        name="phoneNumber"
        value={formState.phoneNumber}
        onChange={onInputChange}
        required
      />
      <button style={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};
