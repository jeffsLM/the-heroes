import Link from 'next/link';
import React from 'react';

import { LogoBase } from './styles';

export interface LogoProps {
  darkModeIsEnabled: boolean;
}

export const Logo: React.FC<LogoProps> = ({ darkModeIsEnabled }) => {
  return (
    <Link href="/" passHref>
      <LogoBase
        darkModeIsEnabled={darkModeIsEnabled}
        width='151'
        height='58'
        viewBox='0 0 281 58'
        fill='none' />
    </Link>
  );
}
