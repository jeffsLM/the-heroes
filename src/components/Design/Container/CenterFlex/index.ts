import styled from 'styled-components';

export const CenterFlex = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: calc(100vh - 5rem);
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;
