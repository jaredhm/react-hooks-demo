import '../css/views/App.css';
import React, { useState } from 'react';
import uuid from "uuid";
import TodoList from "../components/TodoList";
import TodoControls from "../components/TodoControls";
import ModalOverlay from "../components/common/ModalOverlay";

function App() {
	const [todos, changeTodos] = useState([]);

	const handleAddTodo = (todo) => {
		changeTodos([...todos, { name: todo, done: false, key: uuid() }]);
	};

	const handleToggleTodo = (e, key) => {
		changeTodos(todos.map((todo) => {
			if(todo.key !== key) {
				return todo;
			}
			return { name: todo.name, done: !todo.done, key: key };
		}));
	};
	

	return (
		<ModalOverlay>
		  <div className="app">
			<div className="content">
				<h3> TODO </h3>
				<TodoList todos={todos} handleToggleTodo={handleToggleTodo} />
				<TodoControls handleAddTodo={handleAddTodo} />
			</div>
		  </div>
		</ModalOverlay>
	);
}

export default App;
