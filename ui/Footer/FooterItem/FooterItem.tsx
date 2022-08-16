import { ReactElement } from 'react';
import { IFooterItem } from '../../../core/interfaces/IFooterItem';
import Link from 'next/link';
import { FooterItemStyled, FooterLiSubNavStyled } from './FooterItemStyled';

const FooterItem = ({ name, slug, subNav = false } :IFooterItem): ReactElement => {

  if ( subNav ) {
    return (
      <FooterLiSubNavStyled>
        <Link href={`/${slug}`} passHref>
          <FooterItemStyled>{ name }</FooterItemStyled>
        </Link>
      </FooterLiSubNavStyled>
    )
  } else {
    return (
      <li>
        <Link href={`/${slug}`} passHref>
          <FooterItemStyled>{ name }</FooterItemStyled>
        </Link>
      </li>
    )
  }

}

export default FooterItem
