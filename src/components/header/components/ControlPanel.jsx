import styled from 'styled-components';
import { MyButton, MyIcon } from '../../../ui';
import { Link, useNavigate } from 'react-router-dom';
import { ROLE } from '../../../constants/role';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole, selectUserSession } from '../../../selectors';
import { logout } from '../../../store/actions';

const RightAlign = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-right: 10px;
`;

const LoginAndLogout = styled.div`
	display: flex;
`;

const ControlPanelContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const userSession = useSelector(selectUserSession);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<RightAlign>
				{roleId === ROLE.GUEST ? (
					<Link to={'/login'}>
						<MyButton width="100px">Войти</MyButton>
					</Link>
				) : (
					<LoginAndLogout>
						<UserName>{login}</UserName>
						<MyIcon
							id="fa-sign-out"
							size="lg"
							onClick={() => dispatch(logout(userSession))}
						/>
					</LoginAndLogout>
				)}
			</RightAlign>
			<RightAlign>
				<MyIcon
					id="fa-backward"
					size="lg"
					margin="0 10px 0 0"
					onClick={() => navigate(-1)}
				/>
				<Link to={'/post'}>
					<MyIcon id="fa-file-text-o" size="lg" margin="0 10px 0 0"></MyIcon>
				</Link>
				<Link to={'/users'}>
					<MyIcon id="fa-users" size="lg" />
				</Link>
			</RightAlign>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
