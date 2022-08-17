import { useEffect, useState } from "react";

const initialEmployees = [
  {
    name: "Julio",
    years: 24,
    phoneNumber: 555555,
    label: "Julio",
  },
  {
    name: "Daniel",
    years: 20,
    phoneNumber: 555555,
    label: "Daniel",
  },
];

export const useLocalStorage = (key, values) => {
  const [state, setState] = useState([]);

  // const setDataLocalStorage = (key, values) => {
  //   const dataStringify = JSON.stringify(values);
  //   localStorage.setItem(key, dataStringify);
  // };

  const setStorage = (newState) => {
    const dataStringify = JSON.stringify(newState);
    localStorage.setItem(key, dataStringify);
    setState(newState);
  };

  const getDataLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    const dataParse = JSON.parse(data);
    setState(dataParse);
  };

  useEffect(() => {
    if (localStorage.getItem(key)) {
      getDataLocalStorage(key);
    } else {
      setStorage(values);
    }
  }, [key]);

  return [state, setStorage];
};
