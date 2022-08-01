import styled from 'styled-components';

const NavButtonStyled = styled.button`
  width: 20px;
  height: 30px;
  align-self: start;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  margin-top: 5px;
  margin-right: 5px;
  &:focus,&:hover{
    border-radius: 25%;
    outline: 2px solid ${props => props.theme.textColor};
  }
`
export  { NavButtonStyled }
