import styled from 'styled-components';


const ContentContainer = ({children, className}) => {
  return (
	<div className={className}>
	
	{children}

	</div>
  )
}

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 1000px;
	margin-bottom: 20px;
	padding: 140px 40px;
`