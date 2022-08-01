import '../styles/globals.css'
import MainLayout  from '../ui/layout/MainLayout/MainLayout'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme','main')
    if (!localStorage.getItem('fontSize')) localStorage.setItem('fontSize','16px')
    if (!localStorage.getItem('weight')) localStorage.setItem('weight','normal')
    if (!localStorage.getItem('underline')) localStorage.setItem('underline','false')
  })
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
