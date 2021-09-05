import React, {useContext} from "react";
import {UserContext} from "./UserContexr";

export const LoginScreen = () => {
	const {setUser} = useContext(UserContext);

	return (
		<div>
			<h1>Login Screen</h1>
			<hr />

			<button
				className='btn btn-primary'
				onClick={() =>
					setUser({
						name: "Juan",
						lastName: "Perez",
					})
				}>
				Login
			</button>
		</div>
	);
};
