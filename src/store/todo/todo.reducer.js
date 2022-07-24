import { createReducer } from "@reduxjs/toolkit";
import { addItem, editItem, removeItem, setItemDone } from "./todo.actions";

const INITIAL_STATE = {
  todoItems: [],
  currentItem: {
    id: "",
    text: "",
    done: "",
  },
};

export const todoReducer = createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      todoItems: payload,
    };
  },

  [removeItem.type]: (state, action) => {
    const { payload } = action;
    return { ...state, todoItems: payload };
  },

  [editItem.type]: (state, action) => {
    const { payload } = action;
    return { ...state, currentItem: payload };
  },

  [setItemDone.type]: (state, action) => {
    const { payload } = action;
    return { ...state, todoItems: payload };
  },
});
