import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../store/actions/user.action';
import {
	Container,
	List,
	ListItem,
	ListItemText,
	Input,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

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

	const searchHandler = async () => {
		try {
			await dispatch(userActions.searchUsers(search));
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		if (users.length === 0) {
			fetchUsers();
		}
	}, [fetchUsers, users]);

	return (
		<Container>
			<Link to='/add-user'>Add User</Link>
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
						<ListItem key={index}>
							{/* {console.log(user)} */}
							<ListItemText
								primary={user.user.username}
								secondary={user.user.email}
							/>
						</ListItem>
					);
				})}
			</List>
		</Container>
	);
};

export default HomeScreen;
