const initialState = [
	{
		id: 1,
		todo: "Buy milk",
		done: false,
	},
];

const todoReducer = (state = initialState, action) => {
	if (action?.type === "ADD_TODO") {
		return [...state, action.payload];
	}
	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: "Buy bread",
	done: false,
};

const action = {
	type: "ADD_TODO",
	payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
