import { useContext, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";
import "./Task.css";

export const Task = ({ element }) => {
  const { onDeleteTask, onToggleTask, onEditTask } = useContext(TasksContext);
  const { formState, onInputChange } = useForm(element);

  const [modal, setModal] = useState(false);

  const DeleteTask = () => {
    onDeleteTask(element.id);
  };

  const EditTask = (e) => {
    e.preventDefault();
    onEditTask(formState);
    setModal(!modal)
  };

  const ToggleTask = () => {
    onToggleTask(element.id);
  };

  return (
    <tbody>
      <tr>
        <td>
          <Checkbox checked={element.done} onChange={ToggleTask} />
        </td>
        {modal ? (
          <>
            <td>
              <form onSubmit={EditTask}>
                <input
                  type="text"
                  placeholder="Task"
                  name="task"
                  value={formState.task}
                  onChange={onInputChange}
                  required
                />
              </form>
            </td>
            <td>{element.assigned}</td>
            <td>
              <Button variant="contained" onClick={ EditTask } >
                Save
              </Button>
            </td>
          </>
        ) : (
          <>
            <td className={`${element.done ? "through" : " "}`}>
              {element.task}
            </td>
            <td className={`${element.done ? "through" : " "}`}>
              {element.assigned}
            </td>
            <td>
              <Button variant="contained" onClick={() => setModal(!modal)}>
                Edit
              </Button>
            </td>
          </>
        )}

        <td>
          <Button variant="contained" onClick={DeleteTask}>
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};
