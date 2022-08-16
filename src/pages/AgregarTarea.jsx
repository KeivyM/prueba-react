import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import { TareasContext } from "../context/TareasContext";
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
  task: "",
  employee:''
};


export const AgregarTarea = () => {
  const { tareas, sestTareas } = useContext(TareasContext);
  const { employees } = useContext(EmployeesContext);
  const { formState, onInputChange, onResetForm } = useForm(initialValue);
  
  const mostrar = (e) => {
    e.preventDefault();
    console.log(formState);
    onResetForm()
  };

  return (
    <div>
      <form style={styles.form} onSubmit={mostrar}>
        <input
          style={styles.inputs}
          type="text"
          placeholder="Task"
          name="task"
          value={formState.task}
          onChange={onInputChange}
          required
        />
        <label htmlFor="employees">Select an Employee:</label>

        <select name="employee" id="employee" style={styles.inputs} onChange={ onInputChange }>
          {employees.map((employee) => (
            <option key={employee.name} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
        <button style={styles.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

{
  /* <input
          style={styles.inputs}
          type="text"
          placeholder="Asignar a..."
          required
        /> */
}