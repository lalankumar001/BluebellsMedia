import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DatabaseConnection = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    if (!newTodo) return;

    try {
      const response = await axios.post('http://localhost:5000/api/todos', { title: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <h1 className='text-danger'>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className='text-primary'>{todo.title}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default DatabaseConnection;
