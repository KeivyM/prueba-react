export const tasksReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADD TASK":
      return [...initialState, action.payload];

    case "EDIT TASK":
      return initialState.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            task: action.payload.task,
            asignada: action.payload.asignada,
            done: false,
          }
        }
        return task
      });
    
    case "REMOVE TASK":
      return initialState.filter((task) => task.id !== action.payload);

    case "TOGGLE TASK":
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