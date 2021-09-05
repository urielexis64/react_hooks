import React, {useRef} from "react";

import "../02-useEffect/effect.css";

export const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = (e) => {
		inputRef.current.select();
	};

	return (
		<div>
			<h1>Focus Screen</h1>
			<hr />
			<input ref={inputRef} className='form-control' placeholder='Your name' />

			<button onClick={handleClick} className='btn btn-outline-primary mt-5'>
				Focus
			</button>
		</div>
	);
};
