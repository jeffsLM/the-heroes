import styled, { css } from 'styled-components';
import { animations } from '@/animations';

type FormControlProps = {
  isInvalid?: boolean;
};

export const FormControl = styled.div<FormControlProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 3rem;

  max-width: 500px;
  width: 100%;
  animation: ${({ isInvalid }) =>
    isInvalid
      ? css`
          ${animations.shake} 0.3s linear
        `
      : 'none'};

  input {
    border: 1.5px solid ${({ theme, isInvalid }) => (isInvalid ? theme.error : theme.shadesOfGray.i800)};
    border-right: 0px;
  }
`;

export const InputStyled = styled.input`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.shadesOfGray.i1000};
  height: 100%;
  font-size: 1rem;

  border-radius: 5px 0px 0px 5px;
  outline: none;
  padding: 0.5rem;
  width: 100%;
`;

export const IconButton = styled.button`
  height: 100%;
  color: #f5f5f7;
  background: ${({ theme }) => theme.colors.primary};
  border: none;

  padding: 0.5rem 0.8rem;
  border-radius: 0px 5px 5px 0px;

  &:hover {
    filter: brightness(0.9);
  }
`;
