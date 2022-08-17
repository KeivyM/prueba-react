import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { EmployeesContext } from "../context/EmployeesContext";

export function ComboBox() {
  const { employees } = React.useContext(EmployeesContext)
  console.log(employees)
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={employees}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Employee" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption"},
  { label: "The Godfather"}

];
