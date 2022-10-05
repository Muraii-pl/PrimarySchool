import { device } from '../../core/utils/breakpoints';
import styled from 'styled-components';

const AsideNav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  max-width: 1440px;
  @media screen and ${device.tablet} {
    margin-left: 15px;
    order: 4;
    width: 160px;
    height: 100%;
    flex-flow: column wrap;
  }
`
export { AsideNav }
