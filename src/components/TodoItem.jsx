import { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleUpdate = () => {
    if (!editValue.trim()) return;
    updateTodo(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleUpdate} className="save-button">
            Simpan
          </button>
        </div>
      ) : (
        <>
          <span
            className="todo-text"
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <div className="todo-actions">
            <button
              onClick={() => setIsEditing(true)}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              Hapus
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
