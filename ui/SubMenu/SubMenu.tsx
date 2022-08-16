import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { getPageList } from '../../core/service/PagesMenuService';
import { IPagesMenu } from '../../core/interfaces/IPagesMenu';
import SubMenuItem from './SubMenuItem/SubMenuItem';
import { AsideNav } from './SubMenuStyle';

const SubMenu = (): ReactElement => {
  const [subMenu, setSubMenu] = useState<IPagesMenu[]>([])
  useEffect(() => {
    async function getSubMenu() {
      return await getPageList();
    }
    getSubMenu().then((res: IPagesMenu[]) => {
      setSubMenu(res)
    })
  },[])
  return (
    <AsideNav aria-label={'Aside Navigation'}>
      <SubMenuItem title={'Aktualności'} slug={'aktualnosci'}/>
      {subMenu && subMenu.map((menuItem: IPagesMenu) => {
        return <SubMenuItem title={menuItem.title} slug={menuItem.slug} key={menuItem.slug}/>
      })}
    </AsideNav>
  )
}

export default SubMenu
