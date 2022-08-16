import styled from 'styled-components';
import { device } from '../../../core/utils/breakpoints';

const SubMenuItemStyled = styled.a`
  width: 136px;
  text-decoration: ${ props => props.theme.underline ? 'underline' : 'none' };
  font-size: ${ props => props.theme.fontSize };
  background-color: ${ props => props.theme.mainColor };
  color: ${props => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-word;
  min-height: 100%;
  &:nth-child(n + 2) {
    display: none;
  }
;
`

const SumMenuItemWrapper = styled.div`
  display: block;
  &:nth-child(n + 3){
    display: none;
  };
  @media ${device.mobileL}
  {
    &:nth-child(n) {
      display: block;
    }
    &:nth-child(n + 4){
      display: none;
    }
  }
  
`

export { SubMenuItemStyled, SumMenuItemWrapper }
