import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { AvailableColorsVariants } from '@/types/AvailableColorsVariants';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: AvailableColorsVariants;
  icon?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, href, rel, target, variant, icon, ...props }) => {
  if (href) {
    return (
      <Link
        href={href || '/'}
        rel={rel}
        target={target}
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
