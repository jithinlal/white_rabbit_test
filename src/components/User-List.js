import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const UserList = ({ username, email }) => {
	return (
		<ListItem>
			<ListItemText primary={username} secondary={email} />
		</ListItem>
	);
};

export default UserList;
