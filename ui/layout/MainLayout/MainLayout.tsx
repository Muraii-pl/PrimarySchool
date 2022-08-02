import { ReactElement, ReactNode, useEffect, useState } from 'react';
import Logo from '../../Logo/Logo'
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import { IGlobalStyle } from '../../../core/interfaces/IGlobalStyle';
import Navbar from '../../Navigation/Navbar/Navbar';

export default function MainLayout({children}: { children: ReactNode }): ReactElement {
  const [globalStyle, setGlobalStyle] = useState<IGlobalStyle>({
    theme: 'main',
    fontSize: '16px',
    weight: 'normal',
    underline: 'false',
  });
  const [themeSelected, setThemeSelected] = useState(theme['main'])
  useEffect(() => {
    setGlobalStyle({
      theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'main',
      fontSize: localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : '16px',
      weight: localStorage.getItem('weight') ? localStorage.getItem('weight') : 'normal',
      underline: localStorage.getItem('underline') ?localStorage.getItem('underline') : 'false'

    })
    setThemeSelected(globalStyle.theme ? theme[globalStyle.theme] : theme['main'])
  }, [globalStyle.theme])
  return (
    themeSelected && <ThemeProvider theme={themeSelected}>
      <GlobalStyle props={globalStyle}/>
      <Navbar/>
      {children}
    </ThemeProvider>
  )
}
