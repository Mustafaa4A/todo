import { createSelector } from "reselect";

export const selectTodoReducer = (state) => state.todoItems;

export const selectTodoItems = createSelector(
  [selectTodoReducer],
  (todoItems) => todoItems
);

export const selectItemIsdDone = (item) =>
  createSelector([selectTodoItems], (todoItems) => {
    const todoItem =
      todoItems.find((todoItem) => todoItem.id === item.id) || {};
    return todoItem.done;
  });

export const selectCurrentItem = (state) => state.currentItem;
