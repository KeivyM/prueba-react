import React, { useContext, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import "./tarea.css";
import { TasksContext } from "../context/TasksContext";
// import {ModalEdit} from "./ModalEdit";

export const Task = ({ element }) => {
  const { onDeleteTask, onToggleTask, onEditTask } = useContext(TasksContext);
  const [modal, setModal] = useState(false);

  const DeleteTask = () => {
    onDeleteTask(element.id);
  };

  const EditTask = () => {
    onEditTask(element);
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
        <td className={`${element.done ? "through" : " "}`}>{element.task}</td>
        <td className={`${element.done ? "through" : " "}`}>
          {element.asignada}
        </td>
        <td>
          <Button variant="contained" onClick={() => setModal(!modal)}>
            Edit
          </Button>
        </td>
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
