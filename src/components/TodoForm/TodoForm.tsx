import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addTodo } from "../../slices/todoSlice";

import "./todoForm.css";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [textError, setTextError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const todos = useSelector((state: RootState) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTextError("");
    setDescriptionError("");

    if (!text.trim()) {
      setTextError("This field is empty");
    }
    if (!description.trim()) {
      setDescriptionError("This field is empty");
    }
    if (text.trim() && description.trim()) {
      dispatch(
        addTodo({ id: todos.length + 1, text, description, completed: false })
      );
      setText("");
      setDescription("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input__block">
        <input
          className={textError ? "input__error" : ""}
          type="text"
          value={text}
          placeholder="Enter title"
          onChange={(event) => setText(event.target.value)}
        />
        {textError && <span>{textError}</span>}
      </div>
      <div className="input__block">
        <input
          className={descriptionError ? "input__error" : ""}
          type="text"
          value={description}
          placeholder="Enter a description"
          onChange={(event) => setDescription(event.target.value)}
        />
        {descriptionError && <span>{descriptionError}</span>}
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
