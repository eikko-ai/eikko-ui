import React from 'react'
import { Dict } from '../util'
import { Mode } from './types'
import { theme as defaultTheme } from './default'

interface ThemeContextInterface {
  theme: Dict
  mode?: Mode
  toggleMode?: any
}

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: defaultTheme })

export interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
