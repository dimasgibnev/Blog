import styled from 'styled-components';
import { H2 } from '../../ui';
import { TableRow, UserRow } from './components';
import { useDispatch } from 'react-redux';

const UsersContainer = ({ className }) => {
	const users = [];
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<H2>Пользователи</H2>
			<div>
				<TableRow>
					<div className="login-column">Логин</div>
					<div className="registred-column">Дата регистрации</div>
					<div className="role-column">Роль</div>
				</TableRow>
				{users.map(({ id, login, registeredAt, roleId: userRoleId }) => (
					<UserRow
						key={id}
						login={login}
						registeredAt={registeredAt}
						userRoleId={userRoleId}
					/>
				))}
			</div>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;
`;
