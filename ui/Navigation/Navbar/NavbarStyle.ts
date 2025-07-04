import styled from 'styled-components';
import { device } from '../../../core/utils/breakpoints';

const Navigation = styled.nav`
  width: 100%;
  max-width: 1440px;
  min-height: auto;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  @media ${device.tablet} {
    font-size: initial;
    height: 60px;
  }
`
export { Navigation }
