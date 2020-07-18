import LoginData from '../utils/loginData/login.json';

export const loginApi = async ({ username, password }) => {
	return LoginData.credentials.filter((credential) => {
		return credential.username === username && password === credential.password;
	});
};
