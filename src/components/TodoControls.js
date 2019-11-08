import React, { useState } from "react";
import Modal from "./common/Modal";
import TodoForm from "./TodoForm";

const TodoControls = ({ handleAddTodo }) => {
	const [addingTodo, changeAddingStatus] = useState(false);

	let input = null;

	// TODO this feels a little clunky
	const setInput = (elem) => { input = elem }

	const handleSubmit = (e) => {
		const value = input.value.trim();
		if (value !== "") {
			handleAddTodo(value)
			changeAddingStatus(false);
		}
	}

	const handleCancel = (e) => {
		changeAddingStatus(false);
	}

	return (
		<div className="controls">
			<button onClick={() => changeAddingStatus(!addingTodo)}>
				{ addingTodo ? "Cancel" : "Add todo" }
			</button>
			<Modal show={addingTodo}>
				<TodoForm handleSubmit={handleSubmit} handleCancel={handleCancel} setInput={setInput} />
			</Modal>
		</div>
	);
};

export default TodoControls;
