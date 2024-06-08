import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); //todos is variable, setTodos is updating variable (array - of todos)
  const [todo, setTodo] = useState('');//todo is variable, setTodo is updating variable (string - what the todo is)

  const addTodo = () => {
    if (todo.trim()) { // makes sure todo is not empty string
      setTodos([...todos, todo]); // fills todos with previous todos and the new todo
      setTodo(''); //makes todo a blank string for the next todo to be added
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // remakes todos list withoout todo at specified index
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      {/* adds todo with text*/}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
            {/* removes todo at specific position */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
