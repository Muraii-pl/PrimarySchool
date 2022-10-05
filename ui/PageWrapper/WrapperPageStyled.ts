import styled from 'styled-components';
import { device } from '../../core/utils/breakpoints';

const WrapperDivMainPage = styled.div`
  width: 100%;
  order: 3;
  @media screen and ${device.tablet} {
    width: calc(100% - 175px);
  }
  
`
const WrapperDivOtherPage = styled.div`
  width: 100%;
  order: 3;
  @media screen and ${device.tablet} {
    width: calc(100% - 350px);
  }
  
`


export { WrapperDivMainPage, WrapperDivOtherPage }
