import React from "react";

const TodoList = ({ todos, handleToggleTodo }) => {
	return (
		<div className="todo-list">
			{todos.map(({name, done, key}) => (
			<div key={key} className="item">
				<p className={done ? "done" : "todo"}>{name}: </p>
				<input type="checkbox" defaultChecked={done} onClick={(e) => handleToggleTodo(e, key)} />
			</div>
			))}
		</div>
	);
}

export default TodoList;
