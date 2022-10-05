import { ReactElement } from 'react';
import { MainMottoStyle, MottoWrapper, SchoolName, MottoText } from './MainMottoStyle';

const MainMotto = (): ReactElement => {
  return (
    <>
      <MainMottoStyle aria-label={'Mobile Motto'}>
        „Uczymy się nie dla szkoły, lecz dla życia”
      </MainMottoStyle>
      <MottoWrapper aria-label={'Tablet Motto'}>
        <SchoolName>
          Zespół Szkolno-Przedzkolny w Hażlachu
        </SchoolName>
        <MottoText>
          „Uczymy się nie dla szkoły, lecz dla życia”
        </MottoText>
      </MottoWrapper>
    </>
  );
}

export default MainMotto
