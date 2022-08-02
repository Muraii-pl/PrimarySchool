import styled from 'styled-components';

const NavListWrapperStyled = styled.div``

const NavListStyled = styled.ul`
  position: fixed;
  top:60px;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  align-items: center;
  flex-flow: column wrap ;
`

const NavListItemStyled = styled.li`
  margin: 8px 0;
  text-align: center;
  font-size: 1.3rem;
`


export { NavListWrapperStyled, NavListStyled, NavListItemStyled }
