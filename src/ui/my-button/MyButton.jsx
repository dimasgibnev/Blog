import styled from "styled-components"

const MyButtonContainer = ({children, className}) => {
  return (
	<button className={className}>{children}</button>
  )
}

export const MyButton = styled(MyButtonContainer)`
width: 100px;
height: 30px;
`