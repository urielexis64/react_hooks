const initialState = {};

export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload];
		case "REMOVE":
			const newState = [...state];
			newState.splice(action.payload, 1);
			return newState;
		default:
			return state;
	}
};
