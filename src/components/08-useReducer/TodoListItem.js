import React from "react";

export const TodoListItem = ({todo, index, handleRemove, handleToggle}) => {
	return (
		<li key={todo.id} className='list-group-item'>
			<p className={`${todo.done && "completed"}`} onClick={() => handleToggle(index)}>
				{index + 1}. {todo.desc}
			</p>
			<button
				className='btn btn-danger btn-sm float-right'
				onClick={() => handleRemove(index)}>
				Delete
			</button>
		</li>
	);
};
