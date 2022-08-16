import { ReactElement, useEffect, useState } from 'react';
import FooterItem from './FooterItem/FooterItem';
import { FooterStyled, FooterNavWrapper } from './FooterStyle';
import { IPagesMenu } from '../../core/interfaces/IPagesMenu';
import { getPageList } from '../../core/service/PagesMenuService';

const FooterItemList = [
  {
    name: 'Jadłospis',
    slug: 'jadlospis'
  },
  {
    name: 'Konsultacje',
    slug: 'konsultacje'
  },
  {
    name: 'Świetlica Szkolna',
    slug: 'swietlica-szkolna'
  },
  {
    name: 'Sekretariat',
    slug: 'sekretariat'
  },
  {
    name: 'Biblioteka',
    slug: 'biblioteka',
  },
  {
    name: 'Rada Rodziców',
    slug: 'rada-rodzicow'
  },
  {
    name: 'Polityka Bezpieczeństwa',
    slug: 'polityka-bezpieczenstwa'
  },
  {
    name: 'Rodo',
    slug: 'rodo'
  }
];


const Footer = ():ReactElement => {

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
    <FooterStyled>
      <FooterNavWrapper>
        {FooterItemList && FooterItemList.map(item => {
          return <FooterItem name={item.name} slug={item.slug} key={item.slug}/>
        })}
        {subMenu && subMenu.map(item => {
          return <FooterItem name={item.title} slug={item.slug} subNav={true} key={item.slug}/>
        })}
      </FooterNavWrapper>
      <div>
        <h3>Kontakt</h3>
        <p>ul. Kościelna 2</p>
        <p><a href={'tel:0338569428'}>Tel: 033 856 94 28</a></p>
        <p><a href={'https://www.facebook.com/profile.php?id=100048098475568'} target={'_blank'}>Nasz Facebook</a> </p>
      </div>
    </FooterStyled>
  )

}


export default Footer
