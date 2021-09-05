import React, {useEffect, useState} from "react";

export const Message = () => {
	const [coords, setCoords] = useState({
		x: 0,
		y: 0,
	});

	const {x, y} = coords;

	useEffect(() => {
		const handleMouseMove = (e) => {
			setCoords({
				x: e.x,
				y: e.y,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			console.log("desmontado");
		};
	}, []);

	return (
		<div>
			<h3>
				{x} {y}
			</h3>
		</div>
	);
};
