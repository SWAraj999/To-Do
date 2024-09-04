import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editTodo, completeTodo, removeTodo }) => {
  return (
    <TransitionGroup>
      {todos.map((todo, index) => (
        <CSSTransition
          key={index}
          timeout={500}
          classNames="item"
        >
          <TodoItem
            index={index}
            todo={todo}
            editTodo={editTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TodoList;



