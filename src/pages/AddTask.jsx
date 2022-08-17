import { useContext, useState } from "react";
import { SearchEmployees } from "../components/SearchEmployees";
import { EmployeesContext } from "../context/EmployeesContext";
import { TasksContext } from "../context/TasksContext";
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
  task: '',
  employee:''
};


export const AddTask = () => {
  const { onAddTask } = useContext(TasksContext);
  // const { employees } = useContext(EmployeesContext);
  const { formState, onInputChange, onResetForm } = useForm(initialValue);
  const [employeeSelected, setEmployeeSelected] = useState('')
  
  const Add = (e) => {
    e.preventDefault();
    if (employeeSelected.length <= 1) return;
    onAddTask({
      ...formState,
      id: new Date().getTime(),
      done: false,
      assigned: employeeSelected,
    });

    onResetForm();
    setEmployeeSelected('');
  };

  return (
    <div>
      <form style={styles.form} onSubmit={Add}>
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

        <h2 style={{background:'white',width:'200px'}}>{employeeSelected}</h2>
        <button style={styles.button} type="submit">
          Add
        </button>
      </form>
      <SearchEmployees setEmployeeSelected={setEmployeeSelected} />
    </div>
  );
};