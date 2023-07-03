import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;

  transform: scale(1.1);
  margin-bottom: -120px;

  border-radius: 5px;
  z-index: 1;

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
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  }

  img {
    object-fit: cover;
  }
`;
