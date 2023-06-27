import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { AvailableColorsVariants } from '@/types/AvailableColorsVariants';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: AvailableColorsVariants;
  icon?: ReactNode;
  useLink?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, icon, useLink, ...props }) => {
  if (useLink) {
    return (
      <Link
        href="https://github.com/jeffsLM/the-heroes"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        <Container
          variant={variant}
          {...props}>
          {children}
          {icon && icon}
        </Container>
      </Link>
    )
  }


  return (
    <Container variant={variant}  {...props}>
      {children}
      {icon && icon}
    </Container>
  );
}
