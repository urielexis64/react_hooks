import React, {useState, useMemo} from "react";
import {bigProcess} from "../../helpers/bigProcess";
import {useCounter} from "../../hooks/useCounter";

import "../02-useEffect/effect.css";

export const MemoHook = () => {
	const {counter, increment} = useCounter(5000);
	const [show, setShow] = useState(true);

	const memoBigProcess = useMemo(() => bigProcess(counter), [counter]);

	return (
		<div>
			<h1>MemoHook</h1>
			<h3>
				Counter:<small>{counter}</small>
			</h3>
			<hr />

			<p>{memoBigProcess}</p>

			<button className='btn btn-primary' onClick={() => increment()}>
				+
			</button>
			<button className='btn btn-outline-primary ms-3' onClick={() => setShow(!show)}>
				{show ? "Show" : "Hide"}
			</button>
		</div>
	);
};
