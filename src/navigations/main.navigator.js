import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from '../screens/Login.screen';
import HomeScreen from '../screens/Home.screen';
import AddUserScreen from '../screens/Add-User.screen';

const MainNavigator = () => {
	const isAuthenticated =
		useSelector((state) => state.auth.isAuthenticated) ||
		localStorage.getItem('isAuth');
	return (
		<Router>
			<Switch>
				{isAuthenticated ? (
					<>
						<Route exact path='/' component={HomeScreen} />
						<Route path='/add-user' component={AddUserScreen} />
					</>
				) : (
					<Route path='/login' component={LoginScreen} />
				)}
			</Switch>
		</Router>
	);
};

export default MainNavigator;
