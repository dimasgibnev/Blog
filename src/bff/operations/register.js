import { sessions } from '../sessions';
import { getUser, addUser } from '../api';

export const register = async ({ login: regLogin, password: regPassword }) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Пользователь с таким логином уже существует!',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
