import { useState } from "react";

export const useLocalStorage = (key, values = []) => {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : [];
  });

  const setStorage = (newState) => {
    setState(newState);
    const dataStringify = JSON.stringify(newState);
    localStorage.setItem(key, dataStringify);
  };

  return [state, setStorage];
};
