import React, {useReducer, useEffect} from "react";
import {todoReducer} from "./todoReducer";
import {useForm} from "../../hooks/useForm";

import "./reducer.css";

const init = () => {
	const initialState = JSON.parse(localStorage.getItem("todos"));
	return initialState ?? [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{description}, handleInputChange, reset] = useForm({
		description: "",
	});

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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description.trim() === "") return;
		dispatch({
			type: "ADD_TODO",
			payload: {
				id: new Date().getTime(),
				desc: description,
				done: false,
			},
		});
		reset();

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: "ADD",
			payload: newTodo,
		};

		dispatch(action);
		reset();
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
				<ul className='list-group list-group-flush'>
					{todos.map((todo, index) => (
						<li key={todo.id} className='list-group-item'>
							<p
								className={`${todo.done && "completed"}`}
								onClick={() => handleToggle(index)}>
								{index + 1}. {todo.desc}
							</p>
							<button
								className='btn btn-danger btn-sm float-right'
								onClick={() => handleRemove(index)}>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className='col-5'>
				<h4>Add Todo</h4>
				<hr />
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='description'
						className='form-control'
						autoComplete='off'
						placeholder='Enter Todo'
						value={description}
						onChange={handleInputChange}
					/>
					<button type='submit' className='btn btn-outline-primary mt-1 col-12'>
						Add
					</button>
				</form>
			</div>
		</div>
	);
};
