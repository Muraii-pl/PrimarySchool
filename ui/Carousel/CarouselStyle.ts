import styled from 'styled-components';
import { device } from '../../core/utils/breakpoints';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';

interface ICarouselWrapper{
  url: string
}

const CarouselWrapper = styled("div")<ICarouselWrapper>`
  display: none;
  width: 100%;
  height: 345px;
  padding-top: 15px;
  padding-left: 15px;
  background: ${props => `url(${props.url}) no-repeat center`};
  background-size: cover;
  position: relative;
  margin-top: 15px;
  @media ${device.tablet} {
    display: flex;
    order:2;
  }
`

const BackArrow = styled(ArrowIosBackOutline)`
  position: absolute;
  top:50%;
  left: 0;
  transform: translate(0, -50%);
  width: 64px;
  color: #FDFAF6;
  opacity: .5;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
  `

const NextArrow = styled(ArrowIosForwardOutline)`
  position: absolute;
  top:50%;
  right: 0;
  transform: translate(0, -50%);
  width: 64px;
  color: #FDFAF6;
  opacity: .5;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
  
`
const DottedCarouselWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
`

const DottedCarousel = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  opacity: .5;
  background-color: #FDFAF6;
  margin: 0 4px;
`
const DottedSelectedCarousel = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  opacity: 1;
  background-color: #FDFAF6;
  margin: 0 4px;
`
export { CarouselWrapper, BackArrow, NextArrow, DottedCarousel, DottedCarouselWrapper, DottedSelectedCarousel }
