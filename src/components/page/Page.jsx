import styled from 'styled-components';


const PageContainer = ({children, className}) => {
  return (
	<div className={className}>

	{children}

	</div>
  )
}

export const Page = styled(PageContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	
	margin-bottom: 20px;
	padding: 140px 40px;
`