import React, {useContext} from "react";
import {UserContext} from "./UserContexr";

export const HomeScreen = () => {
	const {user} = useContext(UserContext);

	console.log(user);

	return (
		<div>
			<h1>Home Screen</h1>
			<hr />

			<pre>
				<code>{JSON.stringify(user, null, 2)}</code>
			</pre>
		</div>
	);
};
