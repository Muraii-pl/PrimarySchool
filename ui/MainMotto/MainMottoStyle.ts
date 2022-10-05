import styled from 'styled-components';
import { device } from '../../core/utils/breakpoints';

const MainMottoStyle = styled.nav`
  color: ${props => props.theme.textColor};
  font-size: 16px;
  font-weight: normal;
  width: 100%;
  text-align: center;
  @media ${device.tablet} {
    display: none;
    font-size: initial;
    font-weight: ${props => props.theme.weight}
  }
`

const MottoWrapper = styled.div`
  display: none;
  width: 100%;
  @media ${device.tablet} {
    display: block;
  }
`
const SchoolName = styled.h1`
  font-size: 2rem;
  font-weight: ${props => props.theme.weight};
  color: #FFFFFF;
  text-shadow: 0px 4px 4px #3B3B3B;
`
const MottoText = styled.h2`
  font-size: 1.2rem;
  font-weight: ${props => props.theme.weight};
  color: #FFFFFF;
  text-shadow: 0px 4px 4px #3B3B3B;
`
export { MainMottoStyle, MottoWrapper, SchoolName, MottoText  }
