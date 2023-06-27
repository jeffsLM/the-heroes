export type ThemeProps = 'light' | 'dark';

export type ThemeContextType = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  shadesOfGray: {
    i1000: string;
    i900: string;
    i800: string;
    i700: string;
  };
  background: string;
  fonts: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
};
