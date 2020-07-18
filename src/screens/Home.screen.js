import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Container,
	List,
	ListItem,
	ListItemText,
	Input,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import * as userActions from '../store/actions/user.action';
import * as authActions from '../store/actions/auth.action';

import UserList from '../components/User-List';

const HomeScreen = (props) => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const users = useSelector((state) => state.user.users);

	const fetchUsers = useCallback(async () => {
		try {
			await dispatch(userActions.fetchUsers());
		} catch (error) {
			alert(error);
		}
	}, [dispatch]);

	const searchHandler = useCallback(async () => {
		try {
			await dispatch(userActions.searchUsers(search));
		} catch (error) {
			alert(error);
		}
	}, [search, dispatch]);

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	useEffect(() => {
		searchHandler();
	}, [searchHandler]);

	return (
		<Container>
			<Link to='/add-user'>Add User</Link>
			<br />
			<Link
				to='/login'
				onClick={() => {
					dispatch(authActions.logOut());
				}}
			>
				Sign Out
			</Link>
			<Container>
				<Input
					style={{ margin: 10 }}
					placeholder='Seach users'
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						searchHandler();
					}}
				/>
			</Container>
			<List>
				{users.map((user, index) => {
					return (
						<UserList
							key={index}
							username={user.user.username}
							email={user.user.email}
						/>
					);
				})}
			</List>
		</Container>
	);
};

export default HomeScreen;
