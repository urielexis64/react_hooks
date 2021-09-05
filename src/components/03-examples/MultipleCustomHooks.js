import React from "react";
import {useCounter} from "../../hooks/useCounter";
import {useFetch} from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
	const {counter, increment, decrement} = useCounter(1, 1, 30);

	const {data, loading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	const {author, quote} = !!data && data[0];

	return (
		<div>
			<h1>Breaking Bad Hooks</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-2'>{quote}</p>
					<footer className='blockquote-footer'>{author}</footer>
				</blockquote>
			)}

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
