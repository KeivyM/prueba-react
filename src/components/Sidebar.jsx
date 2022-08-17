import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <h2>Tasks</h2>
      <NavLink to="/">List Tasks</NavLink>
      <NavLink to="/empleados">Employees</NavLink>
      <NavLink to="/agregarTarea">Add Task</NavLink>
      <NavLink to="/agregarEmpleado">Add Employee</NavLink>
    </div>
  );
};
