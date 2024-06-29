import React from 'react';
import { useDispatch } from 'react-redux';
import { MyIcon } from '../../../../ui';
import styled from 'styled-components';
import { TableRow } from '../table-row/TableRow';


const UserRowContainer = ({ className, login, registeredAt, userRoleId , roles}) => {
	const dispatch = useDispatch();

	const onRoleChange = () => {};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registred-column">{registeredAt}</div>
				<div className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>{roleName}</option>
						))}
					</select>
					<MyIcon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						size="lg"
						onClick={() => dispatch(/*TO DO*/)}
					/>
				</div>
			</TableRow>
			<MyIcon
				id="fa-trash-o"
				margin="0 0 0 0"
				size="lg"
				onClick={() => dispatch(/*TO DO*/)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
