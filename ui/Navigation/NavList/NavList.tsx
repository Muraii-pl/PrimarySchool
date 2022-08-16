import { ReactElement, useEffect, useState } from 'react';
import { getNavigation } from '../../../core/service/NavigationService';
import { INavigation } from '../../../core/interfaces/INavigation';
import {
  NavListItemStyled,
  NavListStyled,
  Arrow as ArrowDropDown,
  NavSubListStyled,
  NavSubListItemStyled,
  NavListItemText
} from './NavListStyled';
import { is } from '@babel/types';

interface navOpen {
  isOpen: boolean
}

const NavList = ({ isOpen }: navOpen): ReactElement => {
  const [navigation, setNavigation] = useState<INavigation[]>([{
    name: '',
    posts: [{
      slug: '',
      title: '',
    }]
  }]);
  const [subNavArray, setSubNavArray] = useState<boolean[]>([]);

  useEffect(():void => {
    const canToggleSubMenu:boolean[] = []
    async function getNavigationQuery() {
      return await getNavigation();
    }
    getNavigationQuery().then((res: INavigation[]) => {
      setNavigation(res)
      for (let item of res) {
        if ( item.posts.length > 0 ) {
          canToggleSubMenu.push(false);
        }
      }
    setSubNavArray(canToggleSubMenu);
    })
  },[]);

  const toggleSubNav = (index: number) => {

    let tempArr = [...subNavArray];
    if (tempArr[index]) {
      tempArr[index] = false
    } else {
      tempArr = tempArr.map(value => false)
      tempArr[index] = true;
    }
    setSubNavArray(tempArr)
  }

  return (
    <NavListStyled isOpen={isOpen}>
      {navigation && navigation.map((navItem:INavigation, index: number) => {
          return (
            <NavListItemStyled
              key={navItem.name}
              onClick={() => {toggleSubNav(index)}}
              aria-expanded={subNavArray[index]}
              >
              <NavListItemText>
                {navItem.name}
                {navItem.posts.length > 0 && (
                  <span>
                  <ArrowDropDown toggleSubMenu={subNavArray[index]}/>
                </span>
                )}
              </NavListItemText>
              <NavSubListStyled toggleSubMenu={subNavArray[index]} className={subNavArray[index] ? 'active' : ''}>
                {navItem.posts.map(navSubItem => {
                  return (
                    <NavSubListItemStyled key={navSubItem.slug} >
                      <a href={`/${navSubItem.slug}`}>{navSubItem.title}</a>
                    </NavSubListItemStyled>
                  )
                })}
              </NavSubListStyled>
            </NavListItemStyled>
          )
        })}
      <NavListItemStyled>
        <NavListItemText>Kontakt</NavListItemText>
      </NavListItemStyled>
      <NavListItemStyled>
        <NavListItemText>E-dziennik</NavListItemText>
      </NavListItemStyled>
    </NavListStyled>
  )
}

export default NavList
