import React, { useState } from 'react';
import { useServerRequest } from '../../../../hooks';
import { MyIcon } from '../../../../ui';
import styled from 'styled-components';
import { TableRow } from '../table-row/TableRow';

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	userRoleId,
	roles,
	id,
	onUserRemove,
}) => {
	const requestServer = useServerRequest();
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRole, setSelectedRole] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRole(Number(target.value));
	};

	const onRoleSave = (newRoleId) => {
		requestServer('updateUserRole', id, newRoleId).then((res) => {
			setInitialRoleId(newRoleId);
		});
	};
	
	const isSaveButtonDisabled = initialRoleId === selectedRole;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registred-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRole} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<MyIcon
						id="fa-floppy-o"
						size="lg"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onClick={() => onRoleSave( selectedRole)}
					/>
				</div>
			</TableRow>
			<MyIcon
				id="fa-trash-o"
				margin="0 10px 0 0"
				size="lg"
				onClick={onUserRemove}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	align-items: baseline;
	margin-bottom: 10px;

	& .role-column {
		display: flex;
	}
`;
