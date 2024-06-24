import { addUser } from './add-user';
// import { createSession } from './create-session';
import { getUser } from './get-user';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize({ login: authLogin, password: authPassword }) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден!',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Пароль неверный!',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register({ login: regLogin, password: regPassword }) {
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
	},
};
