import React from "react";
import {TodoListItem} from "./TodoListItem";

export const TodoList = ({todos, handleRemove, handleToggle}) => {
	return (
		<ul className='list-group list-group-flush'>
			{todos.map((todo, index) => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					index={index}
					handleRemove={handleRemove}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
};
