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

import AddUserValidationSchema from '../utils/validations/addUserValidation';
import * as userActions from '../store/actions/user.action';

const AddUserScreen = (props) => {
	const dispatch = useDispatch();
	const addUserFormHandler = async (values, actions) => {
		try {
			await dispatch(userActions.addUser(values));
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
						<Typography variant='h5'>Add User</Typography>
					</Container>
					<Formik
						initialValues={{
							title: '',
							first: '',
							last: '',
							email: '',
							password: '',
							username: '',
							dob: '',
							phone: '',
							gender: '',
						}}
						onSubmit={(values, actions) => {
							addUserFormHandler(values, actions);
						}}
						validationSchema={AddUserValidationSchema}
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
										type='text'
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
										name='email'
										placeholder='E-mail'
										type='email'
										value={values.email}
										onChange={handleChange('email')}
										onBlur={handleBlur('email')}
										error={errors.email && touched.email}
									/>
									<InputLabel
										error={errors.email && touched.email}
										style={{ margin: 5 }}
									>
										{errors.email}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='title'
										placeholder='Title Name'
										type='text'
										value={values.title}
										onChange={handleChange('title')}
										error={errors.title && touched.title}
									/>
									<InputLabel
										error={errors.title && touched.title}
										style={{ margin: 5 }}
									>
										{errors.title}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='first'
										placeholder='First Name'
										type='text'
										value={values.first}
										onChange={handleChange('first')}
										error={errors.first && touched.first}
									/>
									<InputLabel
										error={errors.first && touched.first}
										style={{ margin: 5 }}
									>
										{errors.first}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='last'
										placeholder='Last Name'
										type='text'
										value={values.last}
										onChange={handleChange('last')}
										error={errors.last && touched.last}
									/>
									<InputLabel
										error={errors.last && touched.last}
										style={{ margin: 5 }}
									>
										{errors.last}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='password'
										type='password'
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
									<Input
										name='gender'
										placeholder='Gender'
										type='text'
										value={values.gender}
										onChange={handleChange('gender')}
										error={errors.gender && touched.gender}
									/>
									<InputLabel
										error={errors.gender && touched.gender}
										style={{ margin: 5 }}
									>
										{errors.gender}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='phone'
										placeholder='Phone Number'
										type='number'
										value={values.phone}
										onChange={handleChange('phone')}
										error={errors.phone && touched.phone}
									/>
									<InputLabel
										error={errors.phone && touched.phone}
										style={{ margin: 5 }}
									>
										{errors.phone}
									</InputLabel>
								</Container>
								<Container style={{ marginTop: 20 }}>
									<Input
										name='dob'
										placeholder='Date of Birth'
										type='date'
										value={values.dob}
										onChange={handleChange('dob')}
										error={errors.dob && touched.dob}
									/>
									<InputLabel
										error={errors.dob && touched.dob}
										style={{ margin: 5 }}
									>
										{errors.dob}
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

export default AddUserScreen;
