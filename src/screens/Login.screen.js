import React from 'react';
import Card from '@material-ui/core/Card';
import {
	CardContent,
	Typography,
	Container,
	Button,
	Input,
	InputLabel,
} from '@material-ui/core';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import LoginValidationSchema from '../utils/validations/loginValidation';
import * as authActions from '../store/actions/auth.action';

const LoginScreen = (props) => {
	const dispatch = useDispatch();
	const loginFormHandler = async (values, actions) => {
		try {
			await dispatch(authActions.login(values));
			props.history.push('/');
		} catch (error) {
			console.log('login page:', error);
			alert(error);
		}
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%	',
			}}
		>
			<Card variant='outlined'>
				<CardContent>
					<Container>
						<Typography variant='h5'>Login</Typography>
					</Container>
					<Formik
						initialValues={{
							username: '',
							password: '',
						}}
						onSubmit={(values, actions) => {
							loginFormHandler(values, actions);
						}}
						validationSchema={LoginValidationSchema}
					>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							isValid,
							isSubmitting,
							touched,
						}) => (
							<Container fixed>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='username'
										placeholder='Username'
										value={values.username}
										onChange={handleChange('username')}
										onBlur={handleBlur('username')}
										error={errors.username && touched.username}
									/>
									<InputLabel
										error={errors.username && touched.username}
										style={{ margin: 5 }}
									>
										{errors.username}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='password'
										placeholder='******'
										value={values.password}
										onChange={handleChange('password')}
										onBlur={handleBlur('password')}
									/>
									<InputLabel
										error={errors.password && touched.password}
										style={{ margin: 5 }}
									>
										{errors.password}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Button
										variant='contained'
										color='primary'
										onClick={handleSubmit}
										disabled={!isValid}
									>
										Submit
									</Button>
								</Container>
							</Container>
						)}
					</Formik>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginScreen;
