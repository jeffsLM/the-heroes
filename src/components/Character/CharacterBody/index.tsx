import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface CharacterBodyProps extends HTMLAttributes<HTMLDivElement> { }

export const CharacterBody: React.FC<CharacterBodyProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
