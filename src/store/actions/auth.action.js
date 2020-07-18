import { LOGIN, LOGOUT } from '../types/auth.type';
import { loginApi } from '../../services/login.service';

export const login = (values) => {
	return async (dispatch) => {
		try {
			let authenticatedList = await loginApi(values);

			// not looking to hash here, because it's somethign we are doing on the backend
			if (authenticatedList.length > 0) {
				localStorage.setItem('isAuth', true);
				dispatch({
					type: LOGIN,
					authenticated: true,
				});
			} else {
				localStorage.setItem('isAuth', false);
				throw new Error('Username or password is wrong!');
			}
		} catch (error) {
			// This can be used to logging
			console.log(error);
			throw new Error('Internal server error, please try again later');
		}
	};
};

export const logOut = (values) => {
	return async (dispatch) => {
		try {
			localStorage.removeItem('isAuth');
			dispatch({
				type: LOGOUT,
				authenticated: false,
			});
		} catch (error) {
			// This can be used to logging
			console.log(error);
			throw new Error('Internal server error, please try again later');
		}
	};
};
