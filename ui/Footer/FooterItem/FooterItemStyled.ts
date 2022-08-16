import styled from 'styled-components';
import { device } from '../../../core/utils/breakpoints';

const FooterItemStyled = styled.a`
  font-size: ${props => props.theme.fontSize};
  margin: 8px 0;
`

const FooterLiSubNavStyled = styled.li`
  margin: 8px 0;
  display: none;
  &:nth-last-child(-n + 2){
    display: list-item ;
  };
  @media ${device.mobileL} {
    &:nth-last-child(n) {
      display: none ;
    }

    &:nth-last-child(-n + 1) {
      display: list-item; 
    }
  }
@media ${device.tablet} {
  display: none !important;
}
`

export { FooterItemStyled, FooterLiSubNavStyled }
