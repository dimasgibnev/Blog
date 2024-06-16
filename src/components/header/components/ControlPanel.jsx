import styled from 'styled-components';
import { MyButton, MyIcon } from '../../../ui';
import { Link, useNavigate } from 'react-router-dom';

const RightAlign = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAlign>
				<Link to={'/login'}>
					<MyButton>Войти</MyButton>
				</Link>
			</RightAlign>
			<RightAlign>
				<MyIcon
					id={'fa-backward'}
					size={'lg'}
					margin={'12px'}
					onClick={() => navigate(-1)}
				/>
				<Link to={'/post'}>
					<MyIcon id={'fa-file-text-o'} size={'lg'} margin={'12px'}></MyIcon>
				</Link>
				<Link to={'/users'}>
					<MyIcon id={'fa-users'} size={'lg'} />
				</Link>
			</RightAlign>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
