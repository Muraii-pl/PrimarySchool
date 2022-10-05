import { ReactElement, ReactNode } from 'react';
import { WrapperDivMainPage, WrapperDivOtherPage } from './WrapperPageStyled';
import { useRouter } from 'next/router';

const WrapperPage = ({children}: { children: ReactNode }): ReactElement => {
  const router = useRouter()
  return (
    router.pathname === '/' ? (
      <WrapperDivMainPage>
        {children}
      </WrapperDivMainPage>) : (
        <WrapperDivOtherPage>
          {children}
        </WrapperDivOtherPage>
    )
  )
}

export default WrapperPage
