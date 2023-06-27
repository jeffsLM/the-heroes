import styled from 'styled-components';

type ContainerProps = {
  $isDarkMode: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0.4)};
  }
`;

export const Content = styled.div`
  margin: -5.7rem 0rem 1rem 0rem;

  svg {
    margin-left: 2.2rem;
    width: 230px;
    height: 58px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.shadesOfGray.i1000};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 2.7rem;
  margin: 0rem 0rem -0.75rem 0.188rem;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.shadesOfGray.i1000};
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fonts.regular};
  margin: -15px 0px 0px 52px;
`;

export const Actions = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr;
  align-items: center;

  max-width: 700px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Legend = styled.h3`
  color: ${({ theme }) => theme.shadesOfGray.i900};
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 1.2rem;
`;
