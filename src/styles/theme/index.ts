import { ThemeContextType } from '@/types/theme';

const darkTheme: ThemeContextType = {
  colors: {
    primary: '#ED1D24',
    secondary: '#545FFF',
    tertiary: '#009FFF',
  },
  shadesOfGray: {
    i1000: '#FFFFFF',
    i900: '#A7A4C5',
    i800: '#837FA3',
    i700: '#3E3A66',
  },
  background: '#15192C',
  error: '#ED1D24',
  fonts: {
    light: 100,
    regular: 300,
    medium: 600,
    bold: 700,
  },
};

const lightTheme: ThemeContextType = {
  colors: {
    primary: '#ED1D24',
    secondary: '#545FFF',
    tertiary: '#009FFF',
  },
  shadesOfGray: {
    i1000: '#15192C',
    i900: '#92959E',
    i800: '#D0D2DA',
    i700: '#F5F5F7',
  },
  background: '#F5F5F7',
  error: '#ED1D24',
  fonts: {
    light: 100,
    regular: 300,
    medium: 600,
    bold: 700,
  },
};

export const theme = { light: lightTheme, dark: darkTheme };
