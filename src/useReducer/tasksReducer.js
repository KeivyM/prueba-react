import { TYPES } from "./tasksActions";

export const tasksReducer = (initialState = [], action) => {
  switch (action.type) {
    case TYPES.addTask:
      return [...initialState, action.payload];

    case TYPES.editTask:
      return initialState.map((task) => {
        if (task.id === action.payload.id) {
          // console.log(task);
          // console.log(action.payload);
          return {
            ...task,
            task: action.payload.task,
            assigned: action.payload.assigned,
            done: false,
          };
        }
        return task;
      });

    case TYPES.removeTask:
      return initialState.filter((task) => task.id !== action.payload);

    case TYPES.toggleTask:
      return initialState.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });

    default:
      return initialState;
  }
};
