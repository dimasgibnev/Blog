import styled from 'styled-components';

export const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	& > div {
		padding: 0 10px;
	}
	& .login-column {
		width: 172px;

	}
	& .registred-column {
		width: 213px;
		
	}
	& .role-column {
		width: auto;
	}
`;
