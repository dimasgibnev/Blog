import { ROLE } from '../constants/role';
import { addUser } from './add-user';
import { createSession } from './create-session';
import { getUser } from './get-user';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = getUser(authLogin);

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
			res: createSession(user.role_id),
		};
	},

	async register(regLogin, regPassword) {
		const user = getUser(regLogin);

		if (user) {
			return {
				error: 'Пользователь с таким логином уже существует!',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
