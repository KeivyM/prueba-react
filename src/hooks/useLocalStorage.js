import { useEffect, useState } from "react";

export const useLocalStorage = (key, values = []) => {
  // console.log(values)
  const [state, setState] = useState(values);

  const setStorage = (newState) => {
    // console.log("hook", newState, state);
    const dataStringify = JSON.stringify(newState);
    localStorage.setItem(key, dataStringify);
    // console.log(state);
    setState(newState);
    // console.log(state);
  };

  const getStorage = (key) => {
    const data = localStorage.getItem(key);
    const dataParse = JSON.parse(data);
    // console.log(dataParse);
    // console.log(state);
    setState(dataParse);
    // console.log(state);
  };

  useEffect(() => {
    // console.log(localStorage.getItem(key));
    if (localStorage.getItem(key)) {
      getStorage(key);
      // console.log(state);
    } else {
      setStorage(values);
    }
  }, [key]);

  return [state, setStorage];
};
