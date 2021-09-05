const initialState = {};

export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload];
		case "REMOVE":
			const newState = [...state];
			newState.splice(action.payload, 1);
			return newState;
		case "TOGGLE":
			const newState2 = [...state];
			const done = newState2[action.payload].done;
			newState2[action.payload].done = !done;
			return newState2;
		default:
			return state;
	}
};
