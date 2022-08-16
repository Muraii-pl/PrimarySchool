import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import { IGlobalStyle } from '../../../core/interfaces/IGlobalStyle';
import Navbar from '../../Navigation/Navbar/Navbar';
import SubMenu from '../../SubMenu/SubMenu';
import Footer from '../../Footer/Footer';

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
  return (
    themeSelected && <ThemeProvider theme={themeSelected}>
      <GlobalStyle props={globalStyle}/>
      <Navbar/>
      <SubMenu/>
      {children}
      <Footer/>
    </ThemeProvider>
  )
}
