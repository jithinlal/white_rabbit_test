import axios from 'axios';

import { FETCH_USERS, ADD_USERS, SEARCH_USERS } from '../types/user.type';

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			// Only takes up the api on initial load, nothing after that
			if (!localStorage.getItem('initial')) {
				localStorage.setItem('initial', true);
				const response = await axios.get(
					'https://randomuser.me/api/0.8/?results=20',
					{
						headers: {
							'Content-Type': 'application/json',
						},
					},
				);

				const {
					data: { results },
				} = response;

				if (response.status === 200) {
					localStorage.setItem('users', JSON.stringify(results));
					dispatch({
						type: FETCH_USERS,
						users: results,
					});
				} else {
					throw new Error('Could not fetch the users at the moment');
				}
			} else {
				let users = JSON.parse(localStorage.getItem('users'));
				dispatch({
					type: FETCH_USERS,
					users,
				});
			}
		} catch (error) {
			// This can be used to logging
			console.log(error);
			throw new Error('Internal server error, please try again later');
		}
	};
};

export const searchUsers = (searchTerm) => {
	return async (dispatch) => {
		try {
			let users = JSON.parse(localStorage.getItem('users'));
			let filteredUsers = [];
			if (searchTerm !== '') {
				filteredUsers = users.filter((user) => {
					return user.user.username.includes(searchTerm);
				});
			} else {
				filteredUsers = users;
			}
			// console.log(filteredUsers);
			dispatch({
				type: SEARCH_USERS,
				users: filteredUsers,
			});
		} catch (error) {
			// This can be used to logging
			console.log(error);
			throw new Error('Internal server error, please try again later');
		}
	};
};

export const addUser = ({
	title,
	first,
	last,
	email,
	password,
	username,
	dob,
	phone,
	gender,
}) => {
	return async (dispatch) => {
		try {
			let users = JSON.parse(localStorage.getItem('users'));

			users.unshift({
				user: {
					name: { title, first, last },
					email,
					password,
					username,
					dob,
					phone,
					gender,
				},
			});

			localStorage.setItem('users', JSON.stringify(users));
			dispatch({
				type: ADD_USERS,
				users,
			});
		} catch (error) {
			// This can be used to logging
			console.log(error);
			throw new Error('Internal server error, please try again later');
		}
	};
};
