import React, { useContext, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import "./tarea.css";
import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";
// import {ModalEdit} from "./ModalEdit";

export const Task = ({ element }) => {
  const { onDeleteTask, onToggleTask, onEditTask } = useContext(TasksContext);
  const { formState, onInputChange, onResetForm } = useForm(element);

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
            <td>{element.asignada}</td>
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
              {element.asignada}
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

      {/* {modal && <ModalEdit />} */}
    </tbody>
  );
};
