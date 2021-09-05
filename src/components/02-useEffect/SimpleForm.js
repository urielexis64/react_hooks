import React, {useState, useEffect} from "react";
import "./effect.css";
import {Message} from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
	});

	const {name, email} = formState;

	useEffect(() => {
		console.log("Priemra vez");
	}, []);

	useEffect(() => {
		console.log("Cambio el form");
	}, [formState]);

	const handleInputChange = ({target}) => {
		setFormState({...formState, [target.name]: target.value});
	};

	return (
		<>
			<h1>useEffect</h1>
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
				<input
					type='text'
					className='form-control'
					name='email'
					placeholder='email@email.com'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				{name === "123" && <Message />}
			</div>
		</>
	);
};
