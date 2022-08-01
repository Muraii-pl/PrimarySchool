import styled from 'styled-components';
import { device } from '../../core/utils/breakpoints';

const MainMottoStyle = styled.nav`
  color: ${props => props.theme.textColor};
  font-size: 16px;
  font-weight: normal;
  width: 100%;
  text-align: center;
  @media ${device.tablet} {
    font-size: initial;
    font-weight: ${props => props.theme.weight}
  }
`
export { MainMottoStyle }
