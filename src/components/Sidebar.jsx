import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Button } from "@mui/material";

const styles = {
  buttons: {
    background: "#1a483b none repeat scroll 0% 0%",
    textDecoration: "none",
    textTransform: "capitalize",
  },
};

export const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <h2 className="text-title">TasksApp</h2>

      <NavLink className="navLink" to="/">
        <Button style={styles.buttons} variant="contained" size="small">
          Tasks
        </Button>
      </NavLink>
      <NavLink className="navLink" to="/empleados">
        <Button style={styles.buttons} variant="contained" size="small">
          Employees
        </Button>
      </NavLink>
      <NavLink className="navLink" to="/agregarTarea">
        <Button style={styles.buttons} variant="contained" size="small">
          Add Task
        </Button>
      </NavLink>
      <NavLink className="navLink" to="/agregarEmpleado">
        <Button style={styles.buttons} variant="contained" size="small">
          Add Employee
        </Button>
      </NavLink>
    </div>
  );
};
