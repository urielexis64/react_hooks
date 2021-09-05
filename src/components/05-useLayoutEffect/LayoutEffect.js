import React, {useLayoutEffect, useRef} from "react";
import {useCounter} from "../../hooks/useCounter";
import {useFetch} from "../../hooks/useFetch";

import "./layout.css";

export const LayoutEffect = () => {
	const {counter, increment, decrement} = useCounter(1, 1, 30);

	const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	const {quote} = !!data && data[0];

	const pTag = useRef();

	useLayoutEffect(() => {
		console.log(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<blockquote className='blockquote text-end'>
				<p ref={pTag} className='mb-2'>
					{quote}
				</p>
			</blockquote>

			<button
				disabled={counter === 1}
				className='btn btn-primary me-2'
				onClick={() => decrement()}>
				Anterior
			</button>
			<button
				disabled={counter === 30}
				className='btn btn-primary'
				onClick={() => increment()}>
				Siguiente
			</button>
		</div>
	);
};
