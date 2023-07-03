import React, { HTMLAttributes } from 'react';

import { Skeleton } from '@/components/Design/Skeleton';

import { Date, Container } from './styles';

interface CharacterDateProps extends HTMLAttributes<HTMLBaseElement> {
  dateTime?: Date;
  isLoading: boolean;
}

export const CharacterDate: React.FC<CharacterDateProps> = ({ dateTime, isLoading }) => {

  if (isLoading) {
    return (
      <Container>
        <Skeleton
          speed={2}
          width={170}
          height={30}
          viewBox="0 0 220 30"
        >
          <rect x="0" y="0" rx="5" ry="5" width="220" height="30" />
        </Skeleton>
      </Container>
    )
  }

  return (
    <Container>
      Last modification:
      <Date>
        {new Intl.DateTimeFormat('pt-BR').format(dateTime)}
      </Date>
    </Container>
  );
}
