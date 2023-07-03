import styled from 'styled-components';

export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;

  z-index: 2;
  margin: 0.4rem;
  color: #f5f5f7;
  font-weight: ${({ theme }) => theme.fonts.regular};

  svg {
    margin: 0 0.2rem;
    color: ${({ theme }) => theme.colors.primary};
    z-index: 2;
  }
`;
