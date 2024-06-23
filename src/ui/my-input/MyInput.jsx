import { forwardRef } from 'react';
import styled from 'styled-components';
import { ref } from 'yup';

const MyInputContainer = forwardRef (({ className, ...props }, ref) => {
	return <input type="text" placeholder="Логин" className={className} {...props} ref={ref}/>;
});

export const MyInput = styled(MyInputContainer)`
	height: 40px;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid black;
	font-size: 20px;
	width: ${({width = '100%'}) => width};
`;
