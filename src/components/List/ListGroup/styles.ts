import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.5fr);
  gap: 20px 20px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media (min-width: 192px) and (max-width: 425px) {
    grid-template-columns: repeat(1, 0.5fr);
  }

  @media (min-width: 426px) and (max-width: 763px) {
    grid-template-columns: repeat(2, 0.5fr);
  }

  @media (min-width: 764px) and (max-width: 1000px) {
    grid-template-columns: repeat(3, 0.5fr);
  }
`;
