import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, deadline);
    setValue('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col items-center">
      <input
        type="text"
        className="border rounded w-64 py-2 px-3 text-gray-700 mb-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="datetime-local"
        className="border rounded w-64 py-2 px-3 text-gray-700 mb-2"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Set a deadline"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default TodoForm;


