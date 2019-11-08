import "../css/TodoForm.css";
import React from "react";

const TodoForm = ({ handleSubmit, handleCancel, setInput }) => {
	return (
		<div className="todo-form">
			<h3>Add a TODO</h3>
			<input ref={setInput} type="text" placeholder="Take out the trash" />
			<div className="button-row">
				<button onClick={handleSubmit}>Submit new Todo</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	);

};

export default TodoForm;
