import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface CharacterCardProps extends HTMLAttributes<HTMLDivElement> { }

export const CharacterCard: React.FC<CharacterCardProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
