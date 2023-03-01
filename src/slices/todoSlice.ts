import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const saveToLocalStorage = (state: TodoState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.error(e);
  }
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      saveToLocalStorage(state);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage(state);
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
