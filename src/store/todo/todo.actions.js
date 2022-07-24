import { createAction } from "@reduxjs/toolkit";

//actions
export const addItem = createAction("todo/ADD_ITEM");
export const removeItem = createAction("todo/REMOVE_ITEM");
export const editItem = createAction("todo/EDIT_ITEM");
export const setItemDone = createAction("todo/SET_ITEM_DONE");

/*

*/

// Adding items to the list
const addItemToList = (todoItems, itemToAdd) => {
  let lastId = todoItems.length;
  //check if the item exits
  const existingItem = todoItems.find((item) => item.id === itemToAdd.id);

  //if exists update the item
  if (existingItem) {
    console.log("Existing");
    return todoItems.map((todoItem) =>
      todoItem.id === itemToAdd.id
        ? { ...todoItem, text: itemToAdd.text }
        : todoItem
    );
  }

  return [...todoItems, { ...itemToAdd, id: ++lastId, done: false }];
};

const removeItemFromList = (todoItems, itemToRemove) => {
  return todoItems.filter((todoItem) => todoItem.id !== itemToRemove.id);
};

const setItemToDone = (todoItems, itemToDone) => {
  return todoItems.map((item) =>
    item.id === itemToDone.id ? { ...item, done: true } : item
  );
};

/*
Actions
*/
export const setTodoItem = (todoItems, itemToAdd) => {
  const newList = addItemToList(todoItems, itemToAdd);
  return addItem(newList);
};

export const removeTodoItem = (todoItems, itemToRemove) => {
  const newList = removeItemFromList(todoItems, itemToRemove);
  return removeItem(newList);
};

export const SetTodoItemDone = (todoItems, itemToDone) => {
  const newList = setItemToDone(todoItems, itemToDone);
  return setItemDone(newList);
};

export const setCurrentItem = (currentItem) => {
  return editItem(currentItem);
};
