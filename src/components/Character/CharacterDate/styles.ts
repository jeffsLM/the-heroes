import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 0.7rem;

  color: ${({ theme }) => theme.shadesOfGray.i900};
  font-size: 1rem;
`;

export const Date = styled.span`
  padding-left: 0.5rem;
`;
