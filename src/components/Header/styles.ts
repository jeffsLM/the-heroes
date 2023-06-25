import { styled } from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.shadesOfGray.i800};
  background: ${({ theme }) => theme.background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  height: 5rem;
  margin: 0 2rem;
  padding: 0 2rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.shadesOfGray.i800 + '80'};
    transition: background 0.5s ease-out;
    border-radius: 3px;
  }

  span {
    margin: 0.2rem 0.5rem 0rem 0rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const Version = styled.span`
  color: ${({ theme }) => theme.shadesOfGray.i1000 + '80'};
`;
