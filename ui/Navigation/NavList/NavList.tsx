import { ReactElement, useEffect, useState } from 'react';
import { getNavigation } from '../../../core/service/NavigationService';
import { INavigation } from '../../../core/interfaces/INavigation';
import { NavListItemStyled, NavListStyled } from './NavListStyled';
import { ArrowDropDown } from '@styled-icons/material-rounded';

const NavList = (): ReactElement => {
  const [navigation, setNavigation] = useState<INavigation[]>([{
    name: '',
    posts: [{
      slug: '',
      title: '',
    }]
  }])
  const [toggleSubNav, setToggleSubNav] = useState<boolean[]>([])

  useEffect(():void => {
    const canToggleSubMenu:boolean[] = []
    async function getNavigationQuery() {
      return await getNavigation()
    }
    getNavigationQuery().then((res: INavigation[]) => {
      setNavigation(res)
      for (let item of res) {
        if ( item.posts.length > 0 ) {
          canToggleSubMenu.push(false)
        }
      }
    setToggleSubNav(canToggleSubMenu)
    })
  },[])

  return (
    <NavListStyled>
      {navigation && navigation.map((navItem:INavigation, index: number) => {
        if (navItem.posts.length > 0) {
          return (
            <NavListItemStyled key={navItem.name}>
              <h3>
                {navItem.name}
                <span>
                  <ArrowDropDown width={'48px'}/>
                </span>
              </h3>
              <ul>
                {navItem.posts.map(navSubItem => {
                  return (
                    <li key={navSubItem.slug}>
                      <a href={`/${navSubItem.slug}`}>{navSubItem.title}</a>
                    </li>
                  )
                })}
              </ul>
            </NavListItemStyled>
          )
        } else {
          return (
            <NavListItemStyled key={navItem.name}>
             <h3>{navItem.name}</h3>
            </NavListItemStyled>
          )
        }
        })}
      <NavListItemStyled>
        <h3>Kontakt</h3>
      </NavListItemStyled>
      <NavListItemStyled>
        <h3>E-dziennik</h3>
      </NavListItemStyled>
    </NavListStyled>
  )
}

export default NavList
