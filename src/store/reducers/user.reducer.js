import { FETCH_USERS, ADD_USERS, SEARCH_USERS } from '../types/user.type';

const initialState = {
	users: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state.users,
				users: action.users,
			};
		case ADD_USERS:
			return {
				...state.users,
				users: action.users,
			};
		case SEARCH_USERS:
			return {
				...state.users,
				users: action.users,
			};
		default:
			return state;
	}
};
