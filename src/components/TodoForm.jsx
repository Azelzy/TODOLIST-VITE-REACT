import { useState } from 'react';
import { toast } from 'react-toastify';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast.error('isian tidak boleh kosong!');
      return;
    }
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Masukkan tugas baru..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Tambah
      </button>
    </form>
  );
}

export default TodoForm;
