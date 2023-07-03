import React from 'react';

import { Container } from './styles';

export const WorkInProgress: React.FC = () => {
  return (
    <Container>
      <span>
        ( ; - ; )
      </span>
      <h2>Ops! Work in Progress</h2>
      <h3>This feature will be available soon
      </h3>
    </Container>
  );
}
