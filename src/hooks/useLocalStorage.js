import { useEffect, useState } from "react";

export const useLocalStorage = (key, values) => {
  const [state, setState] = useState([]);

  const setStorage = (newState) => {
    const dataStringify = JSON.stringify(newState);
    localStorage.setItem(key, dataStringify);
    setState(newState);
  };

  const getStorage = (key) => {
    const data = localStorage.getItem(key);
    const dataParse = JSON.parse(data);
    setState(dataParse);
  };

  useEffect(() => {
    if (localStorage.getItem(key)) {
      getStorage(key);
    } else {
      setStorage(values);
    }
  }, [key]);

  return [state, setStorage];
};
