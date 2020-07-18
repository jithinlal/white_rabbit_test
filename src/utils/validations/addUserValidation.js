import * as Yup from 'yup';

const addUserValidationSchema = Yup.object().shape({
	first: Yup.string().label('First').required('First Name is required'),
	title: Yup.string().label('Title').required('Title Name is required'),
	last: Yup.string().label('Last').required('Last Name is required'),
	username: Yup.string().label('Username').required('Username is required'),
	password: Yup.string().label('Password').required('Password is required'),
	phone: Yup.string().label('Phone').required('Phone is required'),
	dob: Yup.string().label('Dob').required('Dob is required'),
	email: Yup.string()
		.label('Email')
		.email('Enter a valid email')
		.required('Email is required'),
	gender: Yup.string()
		.label('Gender')
		.matches(/(male|female)/), // gender is a string for now to save time
});

export default addUserValidationSchema;
