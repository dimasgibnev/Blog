export const getUser = async (userLogin) => {
	return fetch(`http://localhost:3005/users?=${userLogin}`)
		.then((loadedUser) => loadedUser.json())
		.then(
			([loadedUser]) =>
				loadedUser && {
					id: loadedUser.id,
					login: loadedUser.login,
					password: loadedUser.password,
					registredAt: loadedUser.registred_at,
					roleId: loadedUser.role_id,
				},
		);
	// const users = await getUsers();

	// return users.find(({ login }) => login === userLogin);
};
