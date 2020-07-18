import { LOGIN } from '../types/auth.type';

const initialState = {
	isAuthenticated: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				isAuthenticated: action.authenticated ? true : false,
			};
		default:
			return state;
	}
};
