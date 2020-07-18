import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
	username: Yup.string().label('Username').required('Username is required'),
	password: Yup.string().label('Password').required('Password is required'),
});

export default loginValidationSchema;
