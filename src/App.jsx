import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text, deadline) => {
    const newTodos = [...todos, { text, isCompleted: false, createdAt: new Date(), deadline }];
    setTodos(newTodos);
  };

  const editTodo = (index, newText, newDeadline) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    newTodos[index].deadline = newDeadline;
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'active') return !todo.isCompleted;
    return true;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-bold mb-8 drop-shadow-lg">To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <FilterButtons setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        editTodo={editTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;


