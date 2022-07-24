import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import { todoReducer } from "./todo/todo.reducer";

export const store = configureStore({
  reducer: todoReducer,
  middleware: [logger],
});
