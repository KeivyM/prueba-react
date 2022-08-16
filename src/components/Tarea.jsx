import React, { useState } from "react";
import { Button, Checkbox } from "@mui/material";
import './tarea.css'

export const Tarea = ({ element: { tarea, asignada, done } }) => {
  const [checked, setChecked] = useState(done);
  
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  // console.log(done);
  return (
    <tbody>
      <tr>
        <td>
          <Checkbox checked={checked} onChange={handleChange} />
        </td>
        <td className={`${checked ? "through" : " "}`}>{tarea}</td>
        <td className={`${checked ? "through" : " "}`}>{asignada}</td>
        <td>
          <Button variant="contained">Edit</Button>
        </td>
        <td>
          <Button variant="contained">Delete</Button>
        </td>
      </tr>
    </tbody>
  );
};
