import styled from 'styled-components';
import { ArrowDropDown } from '@styled-icons/material-rounded';
import { IArrowDropDown } from '../../../core/interfaces/IArrowDropDown';
import { INavSubList } from '../../../core/interfaces/INavSubList';
import { device } from '../../../core/utils/breakpoints';

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
  @media ${device.tablet} {
    order:1;
    font-size: initial;
    min-height: unset;
    height: 60px;
    flex-flow: row wrap;
    position: initial;
  }
`

const NavListItemStyled = styled.li`
  margin: 8px 0;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;
  min-height: 32px;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    height:60px;
    margin: unset;
    min-width:123px;
    position: relative;
    flex:1;
  }
`
const NavListItemText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: ${props => props.theme.underline ? 'underline': 'none'};
  @media ${device.tablet} { 
    font-size: 1rem
  }
`

const NavSubListStyled = styled.ul<INavSubList>`
  max-height: 0;
  overflow: hidden;
  &.active {
    max-height: 9999px;
  }
  @media ${device.tablet} {
    position: absolute;
    top:60px;
    left:0;
    background-color: ${props => props.theme.mainColor};
    z-index:1024;
    width:100%
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
  @media ${device.tablet} {
   text-align: center;
    height:32px
  }
`

const Arrow = styled(ArrowDropDown)<IArrowDropDown>`
  width: 32px;
  transform: ${props => props.toggleSubMenu ? 'rotate(0deg)' : 'rotate(-180deg)'};
    transition: transform 250ms;
  @media ${device.tablet} {
    display: none;
  }
`

export { NavListWrapperStyled, NavListStyled, NavListItemStyled, Arrow, NavSubListStyled, NavSubListItemStyled, NavListItemText }
