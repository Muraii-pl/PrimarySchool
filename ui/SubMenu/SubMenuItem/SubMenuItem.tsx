import { ReactElement } from 'react';
import Link from 'next/link'
import { SubMenuItemStyled, SumMenuItemWrapper } from './SubMenuItemStyled';

const SubMenuItem = ({title,slug}: {title:string, slug:string}): ReactElement => {
  return (
    <SumMenuItemWrapper>
      <Link href={`/${slug}`} passHref>
        <SubMenuItemStyled>{ title }</SubMenuItemStyled>
      </Link>
    </SumMenuItemWrapper>
  )
}

export default SubMenuItem
