import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import MainNavigator from './navigations/main.navigator';
import authReducer from './store/reducers/auth.reducer';
import userReducer from './store/reducers/user.reducer';
import './App.css';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

function App() {
	return (
		<div>
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		</div>
	);
}

export default App;
