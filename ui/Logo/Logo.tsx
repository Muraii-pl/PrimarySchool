import { useEffect, useState } from 'react';
import { getLogo as getLogoService } from '../../core/service/LogoService'
import LogoStyled from './LogoStyled';
import { environment } from '../../environments/environment';

const initLogo = {
  title: '',
  sourceUrl: ''
}

const Logo = ( data: any ) => {
  const [logoData, setLogoData] = useState(initLogo)
  useEffect( () => {
    async function fetchMyQuery() {
      return await getLogoService()
    }
    fetchMyQuery().then(res => setLogoData({
      title: res.title,
      sourceUrl: res.sourceUrl
    }))
  },[])
  return (
    <>
      <a href={environment.homeUrl}>
        <LogoStyled  src={logoData.sourceUrl} alt={'Logo Placówki'} title={logoData.title}></LogoStyled>
      </a>
    </>
  )
}

export default Logo
