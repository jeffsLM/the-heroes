import styled, { DefaultTheme, css } from 'styled-components';
import { AvailableColorsVariants } from '@/types/AvailableColorsVariants';

type ContainerProps = {
  variant: AvailableColorsVariants;
};

const variantStyles = (theme: DefaultTheme, variant: AvailableColorsVariants) => {
  const styles = {
    primary: () => css`
      background: ${theme.colors.primary};
      color: #f5f5f7;
    `,
    secondary: () => css`
      background: ${theme.background};
      border: 1.2px solid ${theme.shadesOfGray.i1000};
      color: ${({ theme }) => theme.shadesOfGray.i1000};
    `,
    tertiary: () => css`
      background: ${theme.colors.tertiary};
      color: ${({ theme }) => theme.shadesOfGray.i1000};
    `,
  };
  return styles[variant]();
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;

  min-width: 220px;
  outline: inherit;
  border: none;
  border-radius: 5px;

  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.shadesOfGray.i1000};
  cursor: pointer;

  svg {
    margin-left: 0.5rem;
    transition: 0.5s;
  }

  &:hover {
    svg {
      transition: 0.4s;
      margin-left: 15px;
    }
  }

  ${({ theme, variant }) => variantStyles(theme, variant)}
`;
