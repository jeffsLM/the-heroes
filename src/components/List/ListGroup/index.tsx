import React, { HtmlHTMLAttributes } from 'react';

import { Skeleton } from '@/components/Design/Skeleton';

import { Container } from './styles';

interface ListGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  numSkeletonToRender: number;
}

export const ListGroup: React.FC<ListGroupProps> = ({ children, numSkeletonToRender, isLoading, ...props }) => {
  const skeletons = Object.keys(new Array(numSkeletonToRender).fill(0)).map(Number);

  if (isLoading) {
    return (
      <Container {...props}>
        {skeletons.map((_, index) => (
          <Skeleton
            key={index}
            speed={2}
            width={180}
            height={250}
            viewBox="0 0 180 250"
          >
            <rect x="0" y="0" rx="5" ry="5" width="180" height="250" />
          </Skeleton>
        ))}
      </Container>
    )
  }

  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
