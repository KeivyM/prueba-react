import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

const styles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "200px",
  padding: "20px",
  backgroundColor: "grey",
  height: "100vh",
  textAlign: "center",
  float:'left'
};

export const Sidebar = () => {
  return (
    <div style={styles}>
      <h2>Tareas</h2>
      <NavLink to="/">Tasks</NavLink>
      <NavLink to="/empleados">Employee</NavLink>
      <NavLink to="/agregarTarea">Add Task</NavLink>
      <NavLink to="/agregarEmpleado">Add Employee</NavLink>
    </div>
  );
};
