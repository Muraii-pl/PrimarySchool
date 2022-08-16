import { ReactElement, useEffect, useState } from 'react';
import { debouce } from '../../../core/utils/debouce';
import Logo from '../../Logo/Logo';
import { Navigation } from './NavbarStyle';
import MainMotto from '../../MainMotto/MainMotto';
import NavButton from '../NavButton/NavButton';
import NavList from '../NavList/NavList';



const MobileNavbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavigation = () => {
    console.log(isOpen)
    setIsOpen(prevState => !prevState)
  }

  return (
    <Navigation aria-label={'Mobile Navigation'} role={'navigation'}>
      <Logo/>
      <MainMotto/>
      <NavButton toggleNavigation={toggleNavigation}/>
      <NavList isOpen={isOpen}/>
    </Navigation>
  )
}

const DesktopNavbar = (): ReactElement => {
  return (
    <Navigation aria-label={'Desktop Navigation'} role={'navigation'}>

    </Navigation>
  )
}


const Navbar = (): ReactElement => {
  const [windowsWidth, setWindowsWidth] = useState(0)


  useEffect(():() => void => {
    const debounceHandleResize = debouce(function handleResize() {
      setWindowsWidth(window.innerWidth)
    }, 1000)
    if (windowsWidth === 0) {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', debounceHandleResize)

    return function (){
      window.removeEventListener('resize', debounceHandleResize)
    }
  },[])

   if (windowsWidth < 768) {
    return <MobileNavbar/>
  } else {
    return <DesktopNavbar/>
  }
}


export default Navbar
