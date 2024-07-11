import styled from 'styled-components';

const IconContainer = ({ className, id, size, onClick }) => {
	return <i className={`fa ${className} ${id}  fa-${size}`} onClick={onClick}></i>;
};

export const MyIcon = styled(IconContainer)`
	margin: ${({ margin = '0' }) => margin};
	cursor: ${({isIcon}) => isIcon ? 'default': 'pointer'};
	color: black;
	color: ${({ disabled }) => (disabled ? '#ccc' : 'black')}
`;
