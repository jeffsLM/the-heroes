import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Link href="http://marvel.com" passHref>Data provided by Marvel. © 2023 MARVEL</Link>
    </Container>
  );
}
