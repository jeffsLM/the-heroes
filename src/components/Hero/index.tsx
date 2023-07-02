import Image from 'next/image';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';

import { HeroesLogo } from '@/assets/HeroesLogo';
import { Button } from '@/components/Button';
import { useThemeChanger } from '@/contexts/Theme.context';

import { Container, Content, Subtitle, Title, Actions, Legend } from './styles';

export const Hero: React.FC = () => {
  const { isDarkMode } = useThemeChanger();

  return (
    <Container $isDarkMode={isDarkMode}>
      <Image
        src='/images/shield.png'
        width={250}
        height={250}
        alt='Shield Logo'
        priority
      />
      <Content>
        <Title>Welcome to</Title>
        <HeroesLogo
          darkModeIsEnabled={isDarkMode}
          viewBox='0 0 281 58'
          fill='none'
        />
        <Subtitle>knowledge base</Subtitle>
      </Content>
      <Legend>Get any Marvel Comics information,</Legend>
      <Legend>any character at any time!</Legend>
      <Actions>
        <Button
          href='/search'
          variant='primary'
          icon={<FiArrowRight size={20} />}
        >
          Start Program
        </Button>
        <Button
          href='https://github.com/jeffsLM/the-heroes'
          rel="noopener noreferrer"
          target="_blank"
          variant='secondary'
          icon={<AiOutlineGithub size={20} />}
        >
          GitHub
        </Button>
      </Actions>
    </Container>
  );
}
