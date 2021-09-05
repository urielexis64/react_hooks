import React, {useContext} from "react";
import {UserContext} from "./UserContexr";

export const AboutScreen = () => {
	const {user, setUser} = useContext(UserContext);

	const handleClick = () => {
		setUser({});
	};

	return (
		<div>
			<h1>AboutScreen</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 2)}</pre>

			<button className='btn btn-outline-danger' onClick={handleClick}>
				Logout
			</button>
		</div>
	);
};
