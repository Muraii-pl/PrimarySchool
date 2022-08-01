import styled from 'styled-components';
import { device } from '../../core/utils/breakpoints';

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  @media ${device.tablet} {
    width: 160px;
    height: 160px
  }
  `;
export default LogoImage
