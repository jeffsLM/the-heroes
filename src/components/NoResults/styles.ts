import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.shadesOfGray.i1000};
    font-size: 0.9rem;
    font-weight: ${({ theme }) => theme.fonts.medium};
  }
`;
