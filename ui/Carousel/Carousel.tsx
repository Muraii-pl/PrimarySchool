import { useEffect, useState } from 'react';
import { getCarousel } from '../../core/service/CarouselService';
import Logo from '../Logo/Logo';
import MainMotto from '../MainMotto/MainMotto';
import { CarouselWrapper, BackArrow, NextArrow, DottedCarouselWrapper, DottedCarousel, DottedSelectedCarousel } from './CarouselStyle';
import { ICarousel } from '../../core/interfaces/ICarousel';


const initCarousel: ICarousel[] | (() => ICarousel[]) = []

const Carousel = () => {

  const [carousel, setCarousel] = useState(initCarousel)
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const nextImg = () => {
    setDisplayImageIndex(prevState => prevState >= carousel.length - 1 ? 0 : prevState + 1 )
  }
  const prevImg = () => {
    setDisplayImageIndex(prevState => prevState <= 0 ? carousel.length - 1 : prevState - 1)
  }

  useEffect( () => {
    async function fetchMyQuery() {
      return await getCarousel()
    }
    fetchMyQuery().then(res => setCarousel(res))
    const interval = setInterval(() => {
      nextImg()
    }, 5000)
    return () => clearInterval(interval)
  },[])

  return(
    <CarouselWrapper url={carousel[displayImageIndex]?.link}>
        <Logo/>
        <MainMotto/>
      <BackArrow onClick={prevImg}/>
      <NextArrow onClick={nextImg}/>
      <DottedCarouselWrapper>
        {carousel.map((elem: ICarousel,key: number) => {
          return (
            key === displayImageIndex ? <DottedSelectedCarousel key={key}/> : <DottedCarousel key={key}/>
          )
        })}
      </DottedCarouselWrapper>
    </CarouselWrapper>
  )
}


export default Carousel
