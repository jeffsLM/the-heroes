import React, { HTMLAttributes } from 'react';

import { Skeleton } from '@/components/Design/Skeleton';

import { Title } from './styles';

interface CharacterTitleProps extends HTMLAttributes<HTMLBaseElement> {
  isLoading: boolean;
}

export const CharacterTitle: React.FC<CharacterTitleProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Skeleton
        speed={2}
        width={220}
        height={30}
        viewBox="0 0 220 30"
      >
        <rect x="0" y="0" rx="5" ry="5" width="220" height="30" />
      </Skeleton>
    )
  }

  return (
    <Title>
      {children}
    </Title>
  );
}
