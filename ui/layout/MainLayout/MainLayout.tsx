import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import { IGlobalStyle } from '../../../core/interfaces/IGlobalStyle';
import Navbar from '../../Navigation/Navbar/Navbar';
import SubMenu from '../../SubMenu/SubMenu';
import Footer from '../../Footer/Footer';
import WrapperPage from '../../PageWrapper/WrapperPage';
import Carousel from '../../Carousel/Carousel';
import { useRouter } from 'next/router';
import Logo from '../../Logo/Logo';

export default function MainLayout({children}: { children: ReactNode }): ReactElement {
  const [globalStyle, setGlobalStyle] = useState<IGlobalStyle>({
    theme: 'main',
    fontSize: '16px',
    weight: 'normal',
    underline: 'none',
  });
  const [themeSelected, setThemeSelected] = useState(theme['main'])
  useEffect(() => {
    setGlobalStyle({
      theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'main',
      fontSize: localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : '16px',
      weight: localStorage.getItem('weight') ? localStorage.getItem('weight') : 'normal',
      underline: localStorage.getItem('underline') ? localStorage.getItem('underline') : 'none'

    })
    setThemeSelected(globalStyle.theme ? theme[globalStyle.theme] : theme['main'])
  }, [globalStyle.theme])


  const router = useRouter()
  return (
    themeSelected && <ThemeProvider theme={themeSelected}>
      <GlobalStyle props={globalStyle}/>
      <Navbar/>
      {router.pathname === '/' &&  <Carousel/>}
      {router.pathname !== '/' &&  <Logo/>}

      <SubMenu/>
      <WrapperPage>
        {children}
      </WrapperPage>
      <Footer/>
    </ThemeProvider>
  )
}
