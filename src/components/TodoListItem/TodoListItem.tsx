import { useDispatch } from "react-redux";
import { toggleTodo } from "../../slices/todoSlice";
import { Todo } from "../../models/Todo";

import "./todoListItem.css";

const TodoListItem = ({
  todo,
  toggleModal,
}: {
  todo: Todo;
  toggleModal: (todo: Todo, event: any) => void;
}) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        backgroundColor: todo.completed ? "green" : "grey",
      }}
      onClick={(event) => toggleModal(todo, event)}
    >
      <span>{todo.id}</span>
      <span>
        {todo.text.length > 15 ? `${todo.text.slice(0, 15)}...` : todo.text}
      </span>
      <span>
        {todo.description.length > 15
          ? `${todo.description.slice(0, 15)}...`
          : todo.description}
      </span>
      <span>
        <input
          className="todo-checkbox"
          name="checkbox"
          type="checkbox"
          onChange={() => dispatch(toggleTodo(todo.id))}
          checked={todo.completed}
        />
      </span>
    </li>
  );
};

export default TodoListItem;
