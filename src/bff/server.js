import { authorize, logout, register, fetchRoles, fetchUsers } from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
};
