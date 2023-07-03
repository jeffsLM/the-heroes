import React, { HTMLAttributes } from 'react';


import { Container } from './styles';

interface CharacterDescriptionProps extends HTMLAttributes<HTMLDivElement> { }

export const CharacterDescription: React.FC<CharacterDescriptionProps> = ({ children }) => {
  return (
    <Container>
      <span>
        {children}
      </span>
    </Container>
  );
}
