import React from "react";
import {useForm} from "../../hooks/useForm";

export const TodoAdd = ({handleAddTodo}) => {
	const [{description}, handleInputChange, reset] = useForm({
		description: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description.trim() === "") return;
		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		handleAddTodo(newTodo);
		reset();
	};

	return (
		<>
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
		</>
	);
};
