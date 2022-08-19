import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Button } from "@mui/material";

export const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <h2 className="text-title">Tasks</h2>

      <NavLink className="navLink" to="/">
        <Button color="secondary" variant="contained" size="small">
          List Tasks
        </Button>
      </NavLink>
      <NavLink className="navLink" to="/empleados">
        <Button color="secondary" variant="contained" size="small">
          Employees
        </Button>
      </NavLink>
      <NavLink className="navLink" to="/agregarTarea">
        <Button color="secondary" variant="contained" size="small">
          Add Task
        </Button>
      </NavLink>
      <NavLink className="navLink" to="/agregarEmpleado">
        <Button color="secondary" variant="contained" size="small">
          Add Employee
        </Button>
      </NavLink>
    </div>
  );
};
