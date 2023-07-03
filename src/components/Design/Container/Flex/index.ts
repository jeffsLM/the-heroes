import styled from 'styled-components';

export const Flex = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;
