import { createContext, ReactNode, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles/theme'

import { ThemeProps } from '@/types/theme'

interface ThemeContextData {
  isDarkMode: boolean;
  theme: ThemeProps;
  changeTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [applicationTheme, setApplicationTheme] = useState<ThemeProps>('dark');
  const isDarkMode = applicationTheme === 'dark';

  const changeTheme = () => {
    const invertedTheme = isDarkMode ? 'light' : 'dark';
    setApplicationTheme(invertedTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme: applicationTheme, isDarkMode, changeTheme }}>
      <ThemeProvider theme={theme[applicationTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeChanger = () => useContext(ThemeContext)
