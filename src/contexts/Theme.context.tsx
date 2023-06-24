import { createContext, ReactNode, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

import { ThemeProps } from '../types/theme'

interface ThemeContextData {
  theme: ThemeProps;
  changeTheme: (theme: ThemeProps) => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [applicationTheme, setApplicationTheme] = useState<ThemeProps>('dark');

  const changeTheme = (theme: ThemeProps) => {
    setApplicationTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme: applicationTheme, changeTheme }}>
      <ThemeProvider theme={theme[applicationTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeChanger = () => useContext(ThemeContext)
