import React from "react";
import {useCounter} from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
	const {state, increment, decrement, reset} = useCounter(100);

	return (
		<>
			<h1>Counter with Hook {state}</h1>
			<hr />

			<button className='btn' onClick={() => decrement(2)}>
				-
			</button>
			<button className='btn' onClick={() => reset(2)}>
				Reset
			</button>

			<button className='btn' onClick={() => increment(2)}>
				+
			</button>
		</>
	);
};
