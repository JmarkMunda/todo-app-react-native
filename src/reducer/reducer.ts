import { ActionType, ITask } from "./reducer.interface";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  MARK_TODO: "mark_todo",
};

export const todoReducer = (state: ITask[], action: ActionType): ITask[] => {
  const { id, title, completed } = action.payload;
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, handleAdd({ id, title })];
    case ACTIONS.REMOVE_TODO:
      const filterTodos = state.filter((item) => item.id !== id);
      return filterTodos;
    case ACTIONS.MARK_TODO:
      const selectedtask = state.map((item: ITask) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
      return selectedtask;
    default:
      return state;
  }
};

const handleAdd = (props: ITask) => {
  const { id, title } = props;
  return { id, title, completed: false };
};
