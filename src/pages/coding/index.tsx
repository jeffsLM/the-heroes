import React from 'react';

import { Container } from '@/components/Design/Container';
import { Header } from '@/components/Header';
import { WorkInProgress } from '@/components/WorkInProgress';

const coding: React.FC = () => {
  return (
    <>
      <Header />
      <Container.Root>
        <WorkInProgress />
      </Container.Root>
    </>
  );
}

export default coding;
