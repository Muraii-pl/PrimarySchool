import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  width: 100%;
  max-width: 1440px;
  background: ${props => props.theme.mainColor};
  margin-top: 15px;
  height: fit-content;
  padding: 75px 8px 15px;
  
`

const FooterNavWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 1fr));
  column-gap: 8px;
`


export { FooterStyled, FooterNavWrapper }
