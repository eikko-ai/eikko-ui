import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { ColorModeProvider } from './colorMode'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props

  return (
    <>
      <ColorModeProvider defaultValue={'light'} useSystemColorMode={false}>
        <GlobalStyles />
        {children}
      </ColorModeProvider>
    </>
  )
}
