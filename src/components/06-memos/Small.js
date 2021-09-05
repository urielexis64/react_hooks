import React from "react";

export const Small = React.memo(({value}) => {
	console.log("xddd");
	return <small>{value}</small>;
});
