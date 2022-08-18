import { useContext, useEffect, useReducer, useState } from "react";
import { SelectEmployee } from "../components/SelectEmployee";
import { TasksContext } from "../context/TasksContext";
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
  const { dispatch } = useContext(TasksContext);
  // console.log(tasks)

  const { formState, onInputChange, onResetForm } = useForm(initialValue);
  const [employeeSelected, setEmployeeSelected] = useState("");

  // useEffect(() => {
  //   setTasksLocal(tasks)
  //   console.log(tasks)
  // },[])
  

  const onAddTask = (task) => {
    const action = {
      type: TYPES.addTask,
      payload: task,
    };
    dispatch(action);
    // console.log(tasks);
    // setTasksLocal(tasks);
    // setTasksLocal(tasks);

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
