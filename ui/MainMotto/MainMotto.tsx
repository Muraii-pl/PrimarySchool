import { ReactElement } from 'react';
import { MainMottoStyle } from './MainMottoStyle';

const MainMotto = (): ReactElement => {
  return (
    <MainMottoStyle aria-label={'Mobile Motto'}>
      „Uczymy się nie dla szkoły, lecz dla życia”
    </MainMottoStyle>
  );
}

export default MainMotto
