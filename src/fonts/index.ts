import { Roboto } from 'next/font/google';

export const fonts = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--roboto-font-family',
  subsets: ['latin'],
});
