import React from 'react'
import { Dict } from '../util'
import { theme as defaultTheme } from './default'

interface ThemeContextInterface {
  theme?: Dict
}

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: defaultTheme })

export interface ThemeProviderProps {
  children: React.ReactNode
  theme?: Dict
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme = defaultTheme } = props

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
