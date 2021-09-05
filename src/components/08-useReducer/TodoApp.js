import React, {useReducer, useEffect} from "react";
import {todoReducer} from "./todoReducer";
import {TodoList} from "./TodoList";
import {TodoAdd} from "./TodoAdd";

import "./reducer.css";

const init = () => {
	const initialState = JSON.parse(localStorage.getItem("todos"));
	return initialState ?? [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleToggle = (index) => {
		const action = {
			type: "TOGGLE",
			payload: index,
		};
		dispatch(action);
	};

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: "ADD",
			payload: newTodo,
		});
	};

	const handleRemove = (index) => {
		const action = {
			type: "REMOVE",
			payload: index,
		};
		dispatch(action);
	};

	return (
		<div className='row'>
			<h1>TODO App ({todos.length})</h1>
			<hr />
			<div className='col-7'>
				<TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle} />
			</div>
			<div className='col-5'>
				<TodoAdd handleAddTodo={handleAddTodo} />
			</div>
		</div>
	);
};
