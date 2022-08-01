import { ReactElement, useEffect, useState } from 'react';
import { debouce } from '../../core/utils/debouce';
import Logo from '../Logo/Logo';
import { Navigation } from './NavbarStyle';
import MainMotto from '../MainMotto/MainMotto';
import { Navigation as NavBars } from '@styled-icons/fluentui-system-filled/Navigation'


const MobileNavbar = (): ReactElement => {
  return (
    <Navigation aria-label={'Mobile Navigation'} role={'navigation'}>
      <Logo/>
      <MainMotto/>
      <NavBars width={30} height={30}/>
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
