import { Navigation as NavBars } from '@styled-icons/fluentui-system-filled/Navigation'
import { NavButtonStyled } from './NavButtonStyled';

interface toggleNav {
  toggleNavigation: () => void;
};

const NavButton = ({toggleNavigation}: toggleNav) => {

  return (
    <NavButtonStyled onClick={toggleNavigation}>
      <NavBars width={20} height={30}/>
    </NavButtonStyled>
  )
}

export default NavButton
