import React, { useState } from 'react';
import { format } from 'date-fns';

const TodoItem = ({ todo, index, editTodo, completeTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDeadline, setNewDeadline] = useState(todo.deadline);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, newText, newDeadline);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`flex items-center justify-between bg-white shadow-md rounded p-4 mb-2 transition-all transform ${todo.isCompleted ? 'todo-item completed' : 'todo-item'}`}>
      {isEditing ? (
        <div className="flex flex-col">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border rounded-full w-64 py-2 px-3 mb-2 text-gray-700"
          />
          <input
            type="datetime-local"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
            className="border rounded-full w-64 py-2 px-3 text-gray-700"
          />
        </div>
      ) : (
        <div>
          <div className="text">
            {todo.text}
          </div>
          <div className="text-sm text-gray-600">
            Created at: {format(new Date(todo.createdAt), 'yyyy-MM-dd HH:mm')}
          </div>
          {todo.deadline && (
            <div className="text-sm text-gray-600">
              Deadline: {format(new Date(todo.deadline), 'yyyy-MM-dd HH:mm')}
            </div>
          )}
        </div>
      )}
      <div>
        <button
          onClick={handleEdit}
          className="mr-2 px-3 py-1 rounded-full bg-yellow-600 text-white hover:bg-yellow-700"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => completeTodo(index)}
          className={`mr-2 px-3 py-1 rounded-full ${todo.isCompleted ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => removeTodo(index)}
          className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

       




