import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <h2 className="text-title">Tasks</h2>
      <NavLink className='navLink' to="/">List Tasks</NavLink>
      <NavLink className='navLink' to="/empleados">Employees</NavLink>
      <NavLink className='navLink' to="/agregarTarea">Add Task</NavLink>
      <NavLink className='navLink' to="/agregarEmpleado">Add Employee</NavLink>
    </div>
  );
};
