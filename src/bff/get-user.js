import { getUsers } from './get-users';

export const getUser = async (userLogin) => {
	const users = await getUsers();

	return users.find(({ login }) => login === userLogin);
};
