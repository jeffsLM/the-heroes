import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  color: ${({ theme }) => theme.shadesOfGray.i1000};
  font-size: 0.8rem;
`;
