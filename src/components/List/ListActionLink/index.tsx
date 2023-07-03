import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { BaseLink } from './styles';

interface ListDisplayerProps extends LinkProps {
  children: ReactNode;
}

export const ListActionLink: React.FC<ListDisplayerProps> = ({ href, children, ...props }) => {
  const router = useRouter();
  const pathname = href?.toString();

  return (
    <BaseLink href={{ pathname: pathname, query: { query: router.query.query || '' } }} {...props}>
      {children}
    </BaseLink >
  );
}

