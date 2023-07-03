import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface CharacterCardHeaderProps extends HTMLAttributes<HTMLHeadElement> { }

export const CharacterCardHeader: React.FC<CharacterCardHeaderProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
