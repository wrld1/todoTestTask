import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { Todo } from "../../models/Todo";
import TodoForm from "../TodoForm/TodoForm";
import TodoModal from "../TodoModal/TodoModal";
import TodoListItem from "../TodoListItem/TodoListItem";

import "./todoList.css";

export const TodoList = () => {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  const toggleTodoModal = (todo: Todo, event: any) => {
    if (event.target.tagName.toUpperCase() == "INPUT") return;
    setSelectedTodo(todo);
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <TodoForm />
      <div className="todo-list__header">
        <span>Id</span>
        <span>Title</span>
        <span>Description</span>
        <span>Status</span>
      </div>
      <ul>
        {todos.map((todo: Todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleModal={toggleTodoModal}
          />
        ))}
      </ul>
      {selectedTodo && (
        <TodoModal todo={selectedTodo} onClose={() => setSelectedTodo(null)} />
      )}
    </div>
  );
};
