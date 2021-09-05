import {useState} from "react";

export const useCounter = (initialState = 10, min = -Infinity, max = Infinity) => {
	const [counter, setCounter] = useState(initialState);

	const increment = (factor = 1) => {
		if (counter - factor > max) return;
		setCounter(counter + factor);
	};

	const decrement = (factor = 1) => {
		if (counter - factor < min) return;
		setCounter(counter - factor);
	};

	const reset = () => {
		setCounter(initialState);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
