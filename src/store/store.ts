import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state") as string)
  : {};

const updatedPersistedState = {
  todoReducer: {
    todos: persistedState.todos || [],
  },
};

export const store = configureStore({
  reducer: {
    todoReducer,
  },
  preloadedState: updatedPersistedState,
});

export type RootState = ReturnType<typeof store.getState>;
