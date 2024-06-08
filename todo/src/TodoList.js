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

  // This function removes a todo from the todos based on position
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // creates a new array without todo you want removed
    setTodos(newTodos); // updates todos
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // updates todo variable with the val from input field
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
