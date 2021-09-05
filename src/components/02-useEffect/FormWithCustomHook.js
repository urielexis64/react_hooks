import React from "react";
import {useForm} from "../../hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
	const [formValues, handleInputChange] = useForm({
		name: "",
		email: "",
		password: "",
	});

	const {name, email, password} = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>FormWithCustomHook</h1>
			<hr />

			<div className='form-group'>
				<input
					type='text'
					className='form-control'
					name='name'
					placeholder='Enter name'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<input
					type='text'
					className='form-control'
					name='email'
					placeholder='email@email.com'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			<div className='form-group'>
				<input
					type='password'
					className='form-control'
					name='password'
					placeholder='**********'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Save
			</button>
		</form>
	);
};
