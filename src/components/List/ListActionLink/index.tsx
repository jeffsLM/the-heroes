import { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

import { BaseLink } from './styles';

interface ListDisplayerProps extends LinkProps {
  children: ReactNode;
}

export const ListActionLink: React.FC<ListDisplayerProps> = ({ children, ...props }) => {
  return (
    <BaseLink {...props}>
      {children}
    </BaseLink >
  );
}

