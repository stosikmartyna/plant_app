import React from 'react';
import { colors } from '../helpers/colors';
import { ViewContainer } from '../components/_library/Containers';
import { AppLogo } from '../components/_library/AppLogo';

export const HomeView = () => {
  return (
    <ViewContainer background={'homeview_background.png'} justifyHorizontally>
      <AppLogo size={12} titleColor={colors.thaiRainforest} />
    </ViewContainer>
  );
}