import styled from 'styled-components';

export const Item = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;

    span,
    div {
      opacity: 1;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background-color: rgba(9, 12, 21, 0.41);
      z-index: 1;
    }
  }

  img {
    position: absolute;
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  border-radius: 5px;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 180px;
  height: 250px;
`;

export const Tittle = styled.span`
  color: #f5f5f7;
  font-weight: ${({ theme }) => theme.fonts.medium};
  font-size: 1.1rem;
  z-index: 2;
  margin: 0.4rem;
  opacity: 0;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;

  z-index: 2;
  margin: 0.4rem 0;
  color: #f5f5f7;
  font-weight: ${({ theme }) => theme.fonts.regular};

  svg {
    margin: 0 0.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
