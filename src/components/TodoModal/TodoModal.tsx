import { Todo } from "../../models/Todo";
import "./todoModal.css";

const TodoModal = ({ todo, onClose }: { todo: Todo; onClose: () => void }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__heading">{todo.text}</h2>
        <div>
          <span>Description:</span>
          <p>{todo.description}</p>
          <p>
            <span>Status:</span>
            {todo.completed ? (
              <input type="checkbox" className="check" checked disabled />
            ) : (
              <input type="checkbox" className="check" disabled />
            )}
          </p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TodoModal;
