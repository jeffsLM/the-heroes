import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 7rem;
    color: ${({ theme }) => theme.shadesOfGray.i1000};
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.shadesOfGray.i900};
  }
`;
