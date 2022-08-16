import styled from 'styled-components';
import { ArrowDropDown } from '@styled-icons/material-rounded';
import { IArrowDropDown } from '../../../core/interfaces/IArrowDropDown';
import { INavSubList } from '../../../core/interfaces/INavSubList';
const NavListWrapperStyled = styled.div``

const NavListStyled = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top:60px;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.mainColor};
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  flex-flow: column wrap ;
`

const NavListItemStyled = styled.li`
  margin: 8px 0;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;
  min-height: 32px;
`
const NavListItemText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: ${props => props.theme.underline ? 'underline': 'none'};
`

const NavSubListStyled = styled.ul<INavSubList>`
  max-height: 0;
  overflow: hidden;
  &.active {
    max-height: 9999px;
  }
`
const NavSubListItemStyled = styled.li`
  font-size: 1rem;
  cursor: pointer;
  margin: 8px 0;
  text-decoration: ${props => props.theme.underline ? 'underline': 'none'};
  &:last-child{
    margin-bottom: 0;
  }

  &:hover{
    text-decoration: underline;
  }
`

const Arrow = styled(ArrowDropDown)<IArrowDropDown>`
  width: 32px;
  transform: ${props => props.toggleSubMenu ? 'rotate(0deg)' : 'rotate(-180deg)'};
    transition: transform 250ms;
`

export { NavListWrapperStyled, NavListStyled, NavListItemStyled, Arrow, NavSubListStyled, NavSubListItemStyled, NavListItemText }
