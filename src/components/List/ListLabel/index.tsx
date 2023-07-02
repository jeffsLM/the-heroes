import React, { HtmlHTMLAttributes } from 'react';

import { Skeleton } from '@/components/Design/Skeleton'

import { Container } from './styles';

interface ListLabelProps extends HtmlHTMLAttributes<HTMLLabelElement> {
  isLoading: boolean;
}

export const ListLabel: React.FC<ListLabelProps> = ({ children, isLoading, ...props }) => {

  if (isLoading) {
    return (
      <Skeleton
        speed={2}
        width={170}
        height={30}
        viewBox="0 0 220 30"
      >
        <rect x="0" y="0" rx="5" ry="5" width="220" height="30" />
      </Skeleton>
    )
  }

  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
