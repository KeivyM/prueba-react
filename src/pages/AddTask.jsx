import { useContext, useState } from "react";
import { SelectEmployee } from "../components/SelectEmployee";
import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";
import "./AddTask.css";

const styles = {
  form: {
    // backgroundColor: "purple",
    // display: "flex",
    // flexDirection: "column",
    // padding: "30px",
    // gap: "10px",
  },
  inputs: {
    // height: "35px",
    // padding: "0 10px",
  },
  button: {
    // height: "35px",
    // width: "200px",
    // margin: "0 auto",
  },
};

const initialValue = {
  task: "",
  employee: "",
};

export const AddTask = () => {
  const { onAddTask } = useContext(TasksContext);
  const { formState, onInputChange, onResetForm } = useForm(initialValue);
  const [employeeSelected, setEmployeeSelected] = useState("");

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
    setEmployeeSelected("");
  };

  return (
    <div className="container-addTask">
      <form className="form-addTask" onSubmit={Add}>
        <input
          className="input-form-addTask"
          type="text"
          placeholder="Task"
          name="task"
          value={formState.task}
          onChange={onInputChange}
          required
        />
        {/* <div></div> */}
        <h2
          className="container-userSelected"
          style={{ background: "white", width: "200px" }}
        >
          {employeeSelected}
        </h2>
        <button
          className="button-form-addTask"
          style={styles.button}
          type="submit"
        >
          Add
        </button>
      </form>
      <SelectEmployee setEmployeeSelected={setEmployeeSelected} />
    </div>
  );
};
