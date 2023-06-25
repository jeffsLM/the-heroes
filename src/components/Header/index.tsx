import React from 'react';

import { AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineNightsStay } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';

import { useTheme } from 'styled-components';

import { Logo } from '@/components/Logo';
import { useThemeChanger } from '@/contexts/Theme.context';

import { Container, Content, Navigation, Version, IconContainer } from './styles';

export const Header: React.FC = () => {
  const globalTheme = useTheme();
  const { changeTheme, isDarkMode } = useThemeChanger();

  return (
    <Container>
      <Content>
        <Logo darkModeIsEnabled={isDarkMode} />
        <Navigation>
          <IconContainer>
            <Version>v1.0.1</Version>
            <AiOutlineGithub
              size={24}
              color={globalTheme?.shadesOfGray.i1000}
            />
          </IconContainer>
          <IconContainer onClick={() => changeTheme()}>
            {isDarkMode ?
              <WiDaySunny
                size={22}
                color={globalTheme?.shadesOfGray.i1000}
              /> :
              <MdOutlineNightsStay
                size={22}
                color={globalTheme?.shadesOfGray.i1000}
              />
            }
          </IconContainer>
        </Navigation>
      </Content>
    </Container>
  );
}
