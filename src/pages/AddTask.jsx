import { useContext, useState } from "react";
import { SelectEmployee } from "../components/SelectEmployee";
import { ReducerContext } from "../context/ReducerContext";
import { useForm } from "../hooks/useForm";
import { TYPES } from "../useReducer/tasksActions";
import "./AddTask.css";

const initialValue = {
  task: "",
  id: "",
  done: "",
  assigned: "",
};

export const AddTask = () => {
  const { dispatch } = useContext(ReducerContext);
  const { formState, onInputChange, onResetForm } = useForm(initialValue);
  const [employeeSelected, setEmployeeSelected] = useState("");

  const onAddTask = (task) => {
    const action = {
      type: TYPES.addTask,
      payload: task,
    };
    dispatch(action);
  };

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
        <h2
          className="container-userSelected"
          style={{ background: "white", width: "200px" }}
        >
          {employeeSelected}
        </h2>
        <button className="button-form-addTask" type="submit">
          Add
        </button>
      </form>
      <SelectEmployee setEmployeeSelected={setEmployeeSelected} />
    </div>
  );
};
