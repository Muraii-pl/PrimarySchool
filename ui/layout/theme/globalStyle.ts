import { createGlobalStyle } from 'styled-components';
import { device } from '../../../core/utils/breakpoints';
import { IGlobalStyle } from '../../../core/interfaces/IGlobalStyle';
import { Itheme } from '../../../core/interfaces/ITheme';


const GlobalStyle = createGlobalStyle<{props: IGlobalStyle, theme: Itheme}>`
  body{
    margin: 0;
    padding: 0;
    font-family: Ubuntu, sans-serif;
    width: 100vw;
    max-width: 1440px;
    font-size: ${props => props.props.fontSize};
    font-weight: ${props => props.props.weight};
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    @media screen and ${device.tablet} {
      padding: 0 15px;
      
    }
    @media screen and ${device.laptopL} {
      margin: 0 auto;
    }
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.3;
  }
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: ${props => props.props.underline} !important;
  }
  main{
    margin: 0 15px;
    @media screen and ${device.tablet} {
      width: 100%;
      margin: 0;
    }
  }
  #__next{
    display: flex;
    flex-flow: row wrap;
  }
  
  `

export default GlobalStyle;
